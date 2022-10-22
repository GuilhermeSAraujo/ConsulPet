import { createServer } from 'miragejs';

export default function makeServer() {
  createServer({
    routes() {
      this.post('/api/signup', () => ({
        cadastro: true
      }));
    }
  });
}
