import { RegisterEntity } from "../../entities/Register.entity";

export interface RegisterRepository {
  addRegister(register: RegisterEntity): Promise<RegisterEntity>;
}