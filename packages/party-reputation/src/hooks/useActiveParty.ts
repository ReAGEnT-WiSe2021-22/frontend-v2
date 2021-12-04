import { createContext, useContext } from 'react';

export const ActivePartyContext = createContext<{
  activeParty: string
  setActiveParty:(activeParty: string) => void
}>({ activeParty: '', setActiveParty: () => {} });

export const useActiveParty = () => useContext(ActivePartyContext);
