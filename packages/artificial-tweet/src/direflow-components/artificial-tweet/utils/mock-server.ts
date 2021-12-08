import { createServer } from 'miragejs';
import { v4 as uuidv4 } from 'uuid';

export const initMockServer = () => {
  const id = uuidv4();
  const userId = uuidv4();

  console.log('Initiating mock server');
  (window as any).server = createServer({
    routes() {
      this.get('/api/artificial-tweets', () => ({
        data: {
          id,
          text: 'SPD macht geile Scheiße!',
          userId,
          username: 'sunanmau5',
          name: 'Sunan Regi',
          party: 'SPD',
          createdDate: new Date(),
        },
      }));
    },
  });
};
