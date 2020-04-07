const axios = require('axios');
const { server_backend } = require('./config');

const api = axios.create({
  baseURL: server_backend,
  timeout: 10000,
  headers: { 'Content-Type': 'application/graphql' },
  crossdomain: true,
  validateStatus: () => {
    return true;
  },
});

module.exports = {
  api
}