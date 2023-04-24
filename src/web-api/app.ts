import express from 'express';
import cors from 'cors';
import registersRouter from './routers/registers/registers.router.js';
import authentication from './middlewares/auth.middleware.js';

const app = express();

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(express.json());
app.use(authentication);

/*
* Routes
*/
app.use('/register', registersRouter);

//app.use(controller);

export default app;