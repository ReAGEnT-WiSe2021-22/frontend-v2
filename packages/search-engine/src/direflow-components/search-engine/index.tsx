import { DireflowComponent } from 'direflow-component';
import App from './App';

const createSearchEngine = () => {
  return DireflowComponent.create({
    component: App,
    configuration: {
      tagname: 'search-engine',
      useShadow: false,
    },
    plugins: [
      {
        name: 'font-loader',
        options: {
          google: {
            families: ['Poppins', 'Advent Pro', 'Noto Sans JP'],
          },
        },
      },
    ],
  });
};

export default createSearchEngine();
