// @ts-ignore
import fetch from 'node-fetch';
import { REAGENT_WIKI_ENDPOINT } from './const';

export const fetchWiki = async () => {
  const request = await fetch(REAGENT_WIKI_ENDPOINT);
  const data = await request.text();
  return data;
};
