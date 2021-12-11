import { PARTY_COLORS } from '../const';

export const getPartyColor = (party: string): string => {
  const parties = Object.keys(PARTY_COLORS);
  if (parties.indexOf(party) > -1) {
    return PARTY_COLORS[party];
  }

  const randomIndex = Math.floor(Math.random() * parties.length);
  return PARTY_COLORS[parties[randomIndex]];
};
