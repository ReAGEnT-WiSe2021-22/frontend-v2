import { PARTY_COLORS, PARTY_RAW_DATA_COLORS } from '../const';

export const getPartyColor = (party: string): [string, string] => {
  const parties = Object.keys(PARTY_COLORS);
  if (parties.indexOf(party) > -1) {
    return [PARTY_COLORS[party], PARTY_RAW_DATA_COLORS[party]];
  }

  const randomIndex = Math.floor(Math.random() * parties.length);
  const randomParty = parties[randomIndex];
  return [PARTY_COLORS[randomParty], PARTY_RAW_DATA_COLORS[randomParty]];
};
