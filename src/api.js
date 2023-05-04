import { request } from 'jsonrpc-lite';

const apiUrl = 'http://localhost:5552'; // Replace with your backend server URL

export async function getImages(constraintKeywords, imageConstraints, subject) {
  const requestData = request(
    1, // Request ID (can be any number)
    'generate_image', // Method name
    { constraintKeywords, imageConstraints, subject } // Parameters object
  );

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestData)
  });

  const responseBody = await response.json();

  if (responseBody.error) {
    throw new Error(responseBody.error.message);
  }

  return responseBody.result;
}
