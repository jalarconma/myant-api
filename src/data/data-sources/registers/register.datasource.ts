import { RegisterEntity } from "../../../domain/entities/Register.entity";

export interface RegisterDataSource {
  addRegister(register: RegisterEntity): Promise<RegisterEntity>;
}