import { RegisterEntity } from "../../../domain/entities/Register.entity.js";
import { BaseDAO } from "../base.dao.js";

import registerDAO from "../../mongo-schemas/registers/register.schema.js";

export interface RegisterDAO extends BaseDAO<RegisterEntity> {

}

export class RegisterDAOImpl implements RegisterDAO {

  delete(id: string): Promise<RegisterEntity> {
    throw new Error("Method not implemented.");
  }

  update(entity: RegisterEntity): Promise<RegisterEntity> {
    throw new Error("Method not implemented.");
  }

  get(id: string): Promise<RegisterEntity> {
    throw new Error("Method not implemented.");
  }

  getAll(): Promise<RegisterEntity[]> {
    throw new Error("Method not implemented.");
  }

  async add(register: RegisterEntity): Promise<RegisterEntity> {
    const newRegister = new registerDAO({...register, _id: undefined});
    const insertedRegister = await newRegister.save();
    return {...register, _id: insertedRegister._id.toString()};
  }
}