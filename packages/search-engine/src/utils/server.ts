import { createServer } from 'miragejs';

export const createMockServer = () => {
  (window as any).server = createServer({
    routes() {
      this.passthrough()
    },
  });
};
