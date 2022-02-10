import { DireflowComponent } from 'direflow-component';
import { initMockServer } from '../../utils/mock-server';
import App from './App';

export default () => {
  // Will also show mock data in production
  // to show the frontend functionality
  initMockServer();

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
