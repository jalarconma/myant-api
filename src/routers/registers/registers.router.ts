import express from 'express';
import { getAll } from '../../controllers/registers/registers.controller.js';

const registersRouter = express.Router();

registersRouter.get('/', getAll);

export default registersRouter;