import { CreateRegisterDTO } from "../../dtos/registers/CreateRegisterDTO";

export class RegisterService {
  
  constructor() {}

  async createRegister(register: CreateRegisterDTO) {
    return register;
  }
}