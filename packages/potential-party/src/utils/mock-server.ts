import { createServer } from 'miragejs';
import { v4 as uuidv4 } from 'uuid';

export const initMockServer = () => {
  console.log('Initiating mock server');
  (window as any).server = createServer({
    routes() {
      this.get('/api/potential-party', () => ({
        data: [{
          id: uuidv4(),
          text: 'SPD macht geile Scheiße!',
          userId: uuidv4(),
          username: 'tweetbot',
          name: 'reagent',
          party: 'SPD',
          createdDate: new Date(),
        }, {
          id: uuidv4(),
          text: 'Grüne in die Bühne!',
          userId: uuidv4(),
          username: 'tweetbot',
          name: 'reagent',
          party: 'Grüne',
          createdDate: new Date(),
        }],
      }));
    },
  });
};
