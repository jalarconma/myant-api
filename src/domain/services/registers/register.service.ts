import { RegisterEntity } from "../../entities/Register.entity";
import { RegisterRepository } from "../../repositories/registers/register.repository";

export class RegisterService {
  
  constructor(private registerRepository: RegisterRepository) {}

  async createRegister(register: RegisterEntity): Promise<RegisterEntity> {
    const createdRegister = await this.registerRepository.addRegister(register);
    return createdRegister;
  }
}