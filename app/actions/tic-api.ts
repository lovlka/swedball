'use server';

const ApiUrl: string = 'https://api.tic.io';
const ApiKey: string | undefined = process.env.TIC_API_KEY;

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

function checkResponse(response: Response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  throw new Error(response.statusText);
}

function getSearchQuery(search: string) {
  const sanitized = search.replace(/[^\w\s-]/gi, '');
  const isNumber = /^[0-9-]+$/.test(sanitized);

  return new URLSearchParams({
    q: encodeURIComponent(sanitized),
    query_by: isNumber ? 'registrationNumber' : 'companyName'
  });
}

export async function searchCompanies(search: string) {
  const query = getSearchQuery(search);
  const url = `${ApiUrl}/search/companies?${query.toString()}`;
  const response = await fetch(url, getRequestInit());
  checkResponse(response);
  return await response.json();
}