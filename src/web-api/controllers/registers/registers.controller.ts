import { plainToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { validate } from 'class-validator';
import { GET, POST, route } from "awilix-express";

import { RegisterService } from '../../../domain/services/registers/register.service.js';
import { CreateRegisterDTO } from '../../../domain/dtos/registers/CreateRegisterDTO.js';

@route('/registers')
export class RegistersController {

  constructor(private registerService: RegisterService) {}

  @GET()
  async getAll(req: Request, res: Response) {
    return res.status(200).json([]);
  }

  @POST()
  async createRegister(req: Request, res: Response) {
    const registerDTO = plainToInstance(CreateRegisterDTO, req.body);
    console.log("dto: ", registerDTO);
    const errors = await validate(registerDTO);
  
    if(errors.length > 0){
      return res.status(400).json(errors);
    }

    const createdRegister = await this.registerService.createRegister(registerDTO);
  
    return res.status(200).json(createdRegister);
  }
}