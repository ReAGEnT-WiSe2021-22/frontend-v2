import { createServer } from 'miragejs';

export const initMockServer = () => {
  console.log('Initiating mock server');
  (window as any).server = createServer({
    routes() {
      this.get('/api/potential-party', () => ({

      }));
    },
  });
};
