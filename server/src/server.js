const http = require('http');
const api = require('./api/api.js');

const server = http.createServer(api);
const port = 80;

server.listen(port);