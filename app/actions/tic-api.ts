'use server';

import { fetchGet, getCompanyUrl, getSearchQuery } from './api-utils';

// The Intelligent Company API
// Docs: https://docs.tic.io/api-core/

export async function searchCompanies(search: string) {
  const query = getSearchQuery(search);
  return await fetchGet(`/search/companies?${query.toString()}`);
}

export async function getCompanySummary(companyId: number) {
  return await fetchGet(getCompanyUrl(companyId));
}

export async function getCompanyShareRegister(companyId: number) {
  return await fetchGet(`${getCompanyUrl(companyId)}/share-register`);
}
