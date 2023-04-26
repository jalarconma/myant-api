import mongoose from "mongoose";
import { RegisterEntity } from "../../../domain/entities/Register.entity";

const RegisterSchema = new mongoose.Schema<RegisterEntity>({
  description: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  registrationDate: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  account: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const RegisterModelSchema = mongoose.model<RegisterEntity>("Registers", RegisterSchema);

export default RegisterModelSchema;