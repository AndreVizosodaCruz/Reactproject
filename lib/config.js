const dev = process.env.NODE_ENV === 'development';

const server_backend = dev ? 'http://localhost:8850' : 'http://localhost:8850';
const server_frontend = dev ? 'http://localhost:3000' : 'http://localhost:3000';

module.exports = {
  server_backend,
  server_frontend,
}