export interface RegisterEntity {

  _id: string | undefined;

  description: string;

  amount: number;

  registrationDate: string;

  type: 'Expense' | 'Income' | 'Transfer';

  account: string;
  
  category: string;

}