import { navigating } from "$app/stores";
//import { getCookie } from 'cookie';
  // src/utils/cookie.js

export function getExpirationFromCookie(navigating: any) {
  //const cookie = getCookie('session');

  return null;

  const cookie: string = ""

  // Split the cookie value by semicolon to extract the individual parts
  const parts = cookie.split(';');

  for (let j = 0; j < parts.length; j++) {
    const part = parts[j].trim();

    // Check if the part contains the expiration date
    if (part.startsWith('expires=')) {
      const expires = new Date(part.substring('expires='.length));
      return expires;
    } 
  }

  return null;
}

async function handle({ event, resolve }) {
  console.log("handle");
  console.log($navigating);

//  const cookie = getExpirationFromSessionCookie($navigating);

  const response = await resolve(event);
  return response;

  // if (cookie) {
  //   const expirationDate = getExpirationFromCookie(cookie);
  //   const currentDate = new Date();

  //   // Check if the cookie has expired
  //   isExpired = expirationDate < currentDate;
  //   if (isExpired) {
  //     throw error(404, 'Expired Session');
  //   }
  // } else {
  //   throw error(404, 'No Valid Session');
  // }
}