/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import { ActivePartyContext } from '../../../hooks/useActiveParty';
import { ReputationModelsContext } from '../../../hooks/useReputationModels';

export const fixtures = {
  parties: ['A', 'B', 'C'],
  activeParty: 'A',
};

export const MockWrappers: React.FC<{ setActiveParty: () => void }> = ({
  setActiveParty,
  children,
}) => (
  <ReputationModelsContext.Provider
    value={{
      data: fixtures.parties.map((party) => ({
        party,
        dates: [],
        sentiments: [],
      })),
    }}
  >
    <ActivePartyContext.Provider
      value={{ activeParty: fixtures.activeParty, setActiveParty }}
    >
      {children}
    </ActivePartyContext.Provider>
  </ReputationModelsContext.Provider>
);
