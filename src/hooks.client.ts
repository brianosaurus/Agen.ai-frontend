import { navigating } from "$app/stores";
//import { getCookie } from 'cookie';
  // src/utils/cookie.js

export async function handle({ event, resolve }) {
  const response = await resolve(event);
  return response;
}