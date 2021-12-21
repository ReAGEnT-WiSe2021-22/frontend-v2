import { createServer } from 'miragejs';
import { partyReputation } from './fixtures/party-reputation';
import { Environment } from './types';

export const initMockServer = () => {
  (window as any).server = createServer({
    routes() {
      this.get('/api/party-reputation', () => ({
        data: partyReputation,
      }));

      this.get('/api/search-tweets', () => ({
        tweets: [
          { id: 1, text: 'Aus cuyy' },
          { id: 2, text: 'Malem malem pengen McD...' },
          { id: 3, text: 'Jokowi pulang aja!!' },
        ],
      }));

      this.get('/api/artificial-tweets', () => ({
        data: {
          id: '97cda64d-3551-4510-974b-bd7c01fb0cb4',
          text: 'SPD macht geile Scheiße!',
          userId: '96cda74d-3541-1923-914p-bd7c01fb0pl9',
          username: 'tweetbot',
          name: 'reagent',
          party: 'SPD',
          createdDate: new Date(),
        },
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