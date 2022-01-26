/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/extensions
import { PartyReputationUpstreamType } from './types';

// eslint-disable-next-line import/prefer-default-export
export const manipulatePartyReputationUpstream = (data: PartyReputationUpstreamType) => {
  const [mlData, rawData] = data;
  return mlData.map((partyReputationData) => {
    const { party } = partyReputationData;
    return {
      ...partyReputationData,
      rawData: rawData.find((raw) => raw.party === party)?.values || [],
    };
  });
};
