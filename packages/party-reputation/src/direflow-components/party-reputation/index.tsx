import { DireflowComponent } from 'direflow-component';
import { initMockServer } from '../../utils/mock-server';

import App from './App';

export default () => {
  const env = process.env.REACT_APP_ENVIRONMENT ?? 'development';
  (window as any).partyReputationEnv = env;
  const isInProduction = env === 'production';
  if (!isInProduction) {
    console.log('Initiating Party-Reputation mock server');
    initMockServer();
  } else {
    console.log('Skipping');
  }

  return DireflowComponent.create({
    component: App,
    configuration: {
      tagname: 'party-reputation',
      useShadow: false,
    },
    plugins: [
      {
        name: 'font-loader',
        options: {
          google: {
            families: ['Advent Pro', 'Noto Sans JP'],
          },
        },
      },
    ],
  });
};
