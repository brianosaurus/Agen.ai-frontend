import { dev } from '$app/environment';

const apiUrl = dev ? 'http://localhost:8080/api' : 'https://brianosaurus.com/api';


export async function getImages(prompt: string) {
  console.log('get images', prompt)
  console.log(apiUrl)

  const payload = {
    jsonrpc: '2.0',
    method: 'generate_image',
    params: { constraintKeywords: '', imageConstraints: '', subject: prompt },
    id: 1,
  };

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'API_REQUEST': 'true'
    },
    body: JSON.stringify(payload)
  });

  const responseBody = await response.json();

  console.log(responseBody)

  if (responseBody.error) {
    throw new Error(responseBody.error.message);
  }

  return responseBody;
}
