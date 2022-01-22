// @ts-ignore
import fetch from 'node-fetch';
import { REAGENT_WIKI_ENDPOINT } from './const';

/**
 *
 * Function to fetch README.md from Wiki repo.
 * @returns Wiki Repo data.
 */
export const fetchWiki = async () => {
  const request = await fetch(REAGENT_WIKI_ENDPOINT);
  const data = await request.text();
  return data;
};
