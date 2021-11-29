import { createServer } from 'miragejs';
import { Environment } from './types';

export const initMockServer = () => {
  (window as any).server = createServer({
    routes() {
      this.get('/api/party-reputation', () => ({
        data: [{
          party: 'A',
          dates: [new Date('10-10-2000'), new Date('11-02-2001'), new Date('02-02-2002')],
          sentiments: [0.1, 0.2, 0.15],
        }],
      }));

      this.get('/api/search-tweets', () => ({
        tweets: [
          { id: 1, text: 'Aus cuyy' },
          { id: 2, text: 'Malem malem pengen McD...' },
          { id: 3, text: 'Jokowi pulang aja!!' },
        ],
      }));
    },
  });
};

export const setup = (): Promise<void> => new Promise((resolve) => {
  const env = process.env.REACT_APP_ENVIRONMENT as Environment || Environment.development;

  (window as any).environment = env;

  if ([Environment.staging, Environment.development].indexOf(env) > -1) {
    initMockServer();
  }

  resolve(undefined);
});
