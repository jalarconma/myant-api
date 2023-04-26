import { RegisterEntity } from "../../../domain/entities/Register.entity.js";
import RegisterModelSchema from "../../mongo-schemas/registers/register.schema.js";
import { RegisterDataSource } from "./register.datasource";

export class RegisterMongoDatasource implements RegisterDataSource {

  constructor() { }
  
  async addRegister(register: RegisterEntity): Promise<RegisterEntity> {
    const newRegister = new RegisterModelSchema({...register, _id: undefined});
    const insertedRegister = await newRegister.save();
    return {...register, _id: insertedRegister._id.toString()};
  }
  
}