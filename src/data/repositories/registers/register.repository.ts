import { RegisterEntity } from "../../../domain/entities/Register.entity";
import { RegisterRepository } from "../../../domain/repositories/registers/register.repository";
import { RegisterDataSource } from "../../data-sources/registers/register.datasource";

export class RegisterRepositoryImpl implements RegisterRepository {

  constructor(private registerMongoDataSource: RegisterDataSource) {  }

  async addRegister(register: RegisterEntity): Promise<RegisterEntity> {
    return this.registerMongoDataSource.addRegister(register);
  }
}