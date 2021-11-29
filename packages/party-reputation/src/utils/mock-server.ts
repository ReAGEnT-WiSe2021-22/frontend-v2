import { createServer } from 'miragejs';
import { createMockDatas } from './fixture';

export const initMockServer = () => {
  console.log('Initiating mock server');
  (window as any).server = createServer({
    routes() {
      this.get('/api/party-reputation', () => {
        const data = createMockDatas();
        return ({
          data,
        });
      });
    },
  });
};
