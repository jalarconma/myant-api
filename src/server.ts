import http from 'http';
import dotenv from 'dotenv';
import app from './web-api/app.js';

dotenv.config();

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
});

export default server;