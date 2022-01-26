import { createServer } from 'miragejs';

import { REAGENT_WIKI_ENDPOINT } from './const';
import { partyReputation } from './fixtures/party-reputation';
import { tweets } from './tweets/tweets';
import { Environment } from './types';

export const initMockServer = () => {
  (window as any).server = createServer({
    routes() {
      this.passthrough(REAGENT_WIKI_ENDPOINT);

      this.get('/api/party-reputation', () => ({
        data: partyReputation,
      }));

      this.get('/api/potential-party', () => ({
        data: tweets,
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
  const env = process.env.REACT_APP_ENVIRONMENT as Environment ?? Environment.development;

  (window as any).environment = env;

  if ([Environment.staging, Environment.development].indexOf(env) > -1) {
    console.log('init mock server');
    initMockServer();
  } else {
    console.log('production mode');
    (window as any).baseUrl = '';
  }

  resolve(undefined);
});
