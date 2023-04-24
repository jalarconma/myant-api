import express from 'express';
import { getAll, createRegister } from '../../controllers/registers/registers.controller.js';

const registersRouter = express.Router();

registersRouter.get('/', getAll);
registersRouter.post('/', createRegister);

export default registersRouter;