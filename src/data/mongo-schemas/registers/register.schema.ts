import mongoose from "mongoose";

const RegisterSchema = new mongoose.Schema({
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

const registerDAO = mongoose.model("Registers", RegisterSchema);

export default registerDAO;