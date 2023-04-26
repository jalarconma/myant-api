import { RegisterEntity } from "../../../domain/entities/Register.entity.js";
import { RegisterDAO } from "../../daos/registers/register.dao.js";
import { RegisterDataSource } from "./register.datasource";

export class RegisterMongoDatasource implements RegisterDataSource {

  constructor(private registerDAO: RegisterDAO) { }
  
  async addRegister(register: RegisterEntity): Promise<RegisterEntity> {
    return this.registerDAO.add(register);
  }
  
}