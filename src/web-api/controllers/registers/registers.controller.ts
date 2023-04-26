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
    try {
      const registerDTO = plainToInstance(CreateRegisterDTO, req.body);
      const errors = await validate(registerDTO);
    
      if(errors.length > 0){
        return res.status(400).json(errors);
      }
  
      const createdRegister = await this.registerService.createRegister({
        _id: undefined,
        description: registerDTO.description ?? '',
        amount: registerDTO.amount ?? 0,
        type: registerDTO.type ?? 'Expense',
        registrationDate: registerDTO.registrationDate ?? new Date(),
        account: registerDTO.account ?? '',
        category: registerDTO.category ?? ''
      });
    
      return res.status(200).json(createdRegister);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}