'use server';

const ApiUrl: string = 'https://dummyapi.online/api';
const ApiKey: string | undefined = process.env.DUMMY_API_KEY;

function getRequestInit(): RequestInit {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };
  if (ApiKey) {
    headers['X-Api-Key'] = ApiKey;
  }
  return { headers };
}
    
export async function fetchUser(userId: number) {
  const res = await fetch(`${ApiUrl}/users/${userId}`, getRequestInit());
  const data = await res.json();
  return data;
}