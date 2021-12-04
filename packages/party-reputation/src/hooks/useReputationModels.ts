import { createContext, useContext } from 'react';
import { ReputationModel } from '../types';

export const ReputationModelsContext = createContext<{data: ReputationModel[]}>({ data: [] });
export const useReputationModel = () => useContext(ReputationModelsContext);
