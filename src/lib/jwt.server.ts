import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '$env/static/private';

export function createJWTToken(user: any) {
  const token = jwt.sign(user, JWT_SECRET, {
  });
  return token;
}

export function verifyJwtToken(token: string) {
  try {
    const decodedToken = jwt.verify(token, JWT_SECRET);
    return decodedToken;
  } catch (error) {
    console.error('JWT verification failed:', error);
    return null;
  }
}