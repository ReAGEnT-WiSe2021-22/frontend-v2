import React, {
  createContext, FC, useContext, useEffect, useState,
} from 'react';
import { Environment } from '../types';

const EnvironmentContext = createContext<Environment>(Environment.development);

/**
 * Environment provider to provide current container's environment.
 */
export const EnvironmentProvider: FC = ({ children }) => {
  const [env, setEnv] = useState<Environment>(Environment.development);

  useEffect(() => {
    const windowEnv = (window as any).environment;
    if (windowEnv) {
      setEnv(windowEnv as Environment);
    }
  }, []);

  return (
    <EnvironmentContext.Provider value={env}>
      {children}
    </EnvironmentContext.Provider>
  );
};

/**
 *
 * TODO: attach environment attribute to window object on container
 */
export const useEnvironment = () => {
  const environment = useContext(EnvironmentContext);

  return {
    environment,
    isProduction: environment === Environment.production,
    isDevelopment: environment === Environment.development,
  };
};
