import { OAuth2Client } from 'google-auth-library';
import { GOOGLE_CLIENT_SECRET } from '$env/static/private';
import { PUBLIC_GOOGLE_CLIENT_ID } from '$env/static/public';
import { decodeJwt } from '$lib/jwt.js';
import { createJWTToken } from '$lib/jwt.server.js';
import { error } from '@sveltejs/kit';

const client = new OAuth2Client(PUBLIC_GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET);

const whitelist = [
  'nikolasschoppmeier@googlemail.com', 
  'greyjello@gmail.com',
  '12bscsssiddiqui@seecs.edu.pk',
  'keith@hoerling.com',
  'brianav8r@gmail.com',
  'phattytuna@gmail.com',
  'niko@agen.ai'
]

async function verifyGoogleToken(token: string) {
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: PUBLIC_GOOGLE_CLIENT_ID,
    });

    return decodeJwt(token)
  } catch (err) {
    throw error(400, 'Invalid Token')
  }
}

export const actions = {
  login: async ({cookies, request}) => {
    console.log('login')
    const data = await request.formData();
    const credential: any = data.get('credential');
    const user = await verifyGoogleToken(credential);

    // 1 week from now, have to minus an hour since the token has an hour on it
    user.exp = user.exp + (60 * 60 * 24 * 7) - (60 * 60); 

    if (!whitelist.includes(user.email)) {
      throw error(400, 'Invalid User')
    }

    const token = createJWTToken(user);

    cookies.set('session', token, {
      sameSite: 'lax',
      secure: true,
      httpOnly: false,
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });

    return { success: true };
  }
}
