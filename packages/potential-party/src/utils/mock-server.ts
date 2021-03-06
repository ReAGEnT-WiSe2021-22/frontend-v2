import { createServer } from 'miragejs';
import { generateMockData } from './generate-mock-data';

/**
 *
 * Function to initialise Mock Server
 * on development.
 */
export const initMockServer = () => {
  console.log('Initiating mock server');
  (window as any).server = createServer({
    routes() {
      this.get('/api/potential-party', () => {
        const data = generateMockData();
        return ({
          data,
        });
      });
    },
  });
};
