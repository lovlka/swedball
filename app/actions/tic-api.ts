'use server';

import {
  fetchGet, getCompanyUrl, getPersonUrl,
  getCompanySearchQuery, getPersonSearchQuery
} from './api-utils';

// The Intelligence Company API
// Docs: https://docs.tic.io/api-core/

export async function searchCompanies(search: string) {
  const query = getCompanySearchQuery(search);
  return await fetchGet(`/search/companies?${query.toString()}`);
}

export async function getCompanySummary(companyId: number) {
  return await fetchGet(getCompanyUrl(companyId));
}

export async function getCompanyShareRegister(companyId: number) {
  return await fetchGet(`${getCompanyUrl(companyId)}/share-register`);
}

export async function searchPersons(search: string) {
  const query = getPersonSearchQuery(search);
  return await fetchGet(`/search/persons?${query.toString()}`);
}

export async function getPersonSummary(personId: number) {
  return await fetchGet(getPersonUrl(personId));
}