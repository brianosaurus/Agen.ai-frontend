import { navigating } from "$app/stores";
//import { getCookie } from 'cookie';
  // src/utils/cookie.js

async function handle({ event, resolve }) {
  const response = await resolve(event);
  return response;

}