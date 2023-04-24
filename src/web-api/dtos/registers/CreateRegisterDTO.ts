import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateRegisterDTO {

  @IsNotEmpty()
  description: string | undefined;

  @IsNotEmpty()
  amount: number | undefined;

  @IsNotEmpty()
  registrationDate: Date | undefined;

  @IsNotEmpty()
  type: 'Expense' | 'Income' | 'Transfer' | undefined;

  @IsNotEmpty()
  account: string | undefined;
  
  @IsNotEmpty()
  category: string | undefined;

  constructor() {}
}
