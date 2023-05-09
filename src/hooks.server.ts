export async function handle({ event, resolve }) {
  // eventually check security here

  const response = await resolve(event);
  return response;
}