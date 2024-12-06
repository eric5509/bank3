export type Address = {};

export type TAccount = {
  id: string;
  userID: string;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: "male" | "female" | "other";
  dob: string;
  accountNumber: string;
  occupation: string;
  currency: "USD" | "EUR" | "GBP";
  nationality: string;
  maritalStatus:
    | "single"
    | "married"
    | "complicated"
    | "divorced"
    | "widowed"
    | "separated"
    | "domestic partnership";
  street: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  availableBalance: number;
  currentBalance: number;
  imf: string;
  active: boolean;
  cot: string;
  status: "pending" | "failed" | "success";
  accountType: "savings" | "checking" | "business" | "student";
  transferPin: string;
  authPin: string;
  password: string;
};




export type TTransferOutBound = {
  senderAccountNumber: string;
  recipientAccountName: string;
  recipientAccountNumber: string;
  recipientBankName: string;
  status: string;
  amount: string;
  description: string;
  date: string;
};

export type TTransferInBound = {
  recipientAccountNumber: string;
  senderAccountName: string;
  senderAccountNumber: string;
  senderBankName: string;
  status: string;
  amount: string;
  description: string;
  date: string;
};

export type TTransaction = {
  accountHolder: string;
  accountNumber: string;
  transactionType: "credit" | "debit";
  description: string;
  amount: number;
  status: "pending" | "success" | "failed";
  date: number;
  userID: string;
  transactionID: string;
  accountBalance: number;
};

export type TOptions = {
  label: string;
  value: string;
};

export type TTransfer = {
  senderAccountName?: string;
  senderAccountNumber?: string;
  senderBankName?: string;
  recipientAccountName?: string;
  recipientBankName?: string;
  recipientAccountNumber?: string;
  description?: string;
  amount?: number;
  date?: string;
  status?: "pending" | "success" | "failed";
  senderId?: string;
  recipientId?: string;
  id?: string;
};

export type TLoan = {
  user: string;
  accountHolder: string;
  accountNumber: string;
  amount: string;
  reason: string;
  date: string;
  loanID: string;
  status: string;
};

export type TCredit = {
  accountNumber: string;
  status: string;
  amount: string;
  description: string;
  date: string;
};
