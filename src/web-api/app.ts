import express from 'express';
import cors from 'cors';
//import registersRouter from './routers/registers/registers.router.js';
import authentication from './middlewares/auth.middleware.js';

import { controller, loadControllers } from "awilix-express";
import { loadContainer } from "./di/container.js";

import path from 'path';
import { fileURLToPath } from 'url';
import { RegistersController } from './controllers/registers/registers.controller.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('dirname: ', __dirname);

const app = express();

loadContainer(app);

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(express.json());
//app.use(authentication);

/*
* Routes
*/
// app.use(loadControllers(
//   'controllers/registers/*.controller.js',
//   { cwd: __dirname }
// ));
app.use(controller(RegistersController))
//app.use('/register', registersRouter);

export default app;