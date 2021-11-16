import { createServer } from 'miragejs';

export const createMockServer = () => {
  (window as any).server = createServer({
    routes() {
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
