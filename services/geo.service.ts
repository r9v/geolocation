import getConfig from "next/config";

import { fetchWrapper } from "../helpers";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/geo`;

export const geoService = {
  get,
  delete: _delete,
  create,
};

function get(page: number) {
  return fetchWrapper.get(`${baseUrl}?page=${page}&limit=2`);
}

function _delete(ids) {
  return fetchWrapper.delete(`${baseUrl}?ids=${ids}`);
}

function create(ipOrDomain: string) {
  return fetchWrapper.post(`${baseUrl}?ipOrDomain=${ipOrDomain}`);
}
