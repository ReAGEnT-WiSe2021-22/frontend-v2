import { DireflowComponent } from 'direflow-component';
import { initMockServer } from '../../utils/mock-server';
import App from './App';

export default () => {
  const isInProduction = process.env.REACT_APP_ENVIRONMENT === 'production';
  if (!isInProduction) {
    initMockServer();
  }

  return DireflowComponent.create({
    component: App,
    configuration: {
      tagname: 'potential-party',
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
