import { plainToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { CreateRegisterDTO } from '../../dtos/registers/CreateRegisterDTO.js';
import { validate } from 'class-validator';

export const getAll = (req: Request, res: Response) =>{
  return res.status(200).json([]);
}

export const createRegister = async (req: Request, res: Response) => {
  const registerDTO = plainToInstance(CreateRegisterDTO, req.body);
  console.log("dto: ", registerDTO);
  const errors = await validate(registerDTO);

  if(errors.length > 0){
    return res.status(400).json(errors);
  }

  return res.status(200).json({});
}