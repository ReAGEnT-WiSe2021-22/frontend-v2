import { DireflowComponent } from 'direflow-component';
import { initMockServer } from '../../utils/mock-server';

import App from './App';

export default () => {
  const isInProduction = process.env.REACT_APP_ENVIRONMENT === 'production';
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
