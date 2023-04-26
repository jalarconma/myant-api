import http from 'http';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import app from './web-api/app.js';

dotenv.config();

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_ATLAS_CONNECTION || '');

    server.listen(PORT, () => {
      console.log(`Listening on port: ${PORT}`)
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();

export default server;