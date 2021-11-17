import { DireflowComponent } from 'direflow-component';
import { createMockServer } from '../../utils/server';
import App from './App';

const createSearchEngine = () => {
  const URL = process.env.REACT_APP_API_BASE_URL;
  const isProduction = true;

  if (!isProduction) {
    createMockServer();
  }

  (window as any).baseUrl = isProduction && URL ? URL : '';

  return DireflowComponent.create({
    component: App,
    configuration: {
      tagname: 'search-engine',
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
