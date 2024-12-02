export type Address = {
  
};

export type TAccount = {
  id: string;
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
  maritalStatus: 'single' | 'married' | 'complicated' | 'divorced' |'widowed' | 'separated' | 'domestic partnership'
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
  pin: string;
  password: string;
};

export type TAccount2 = {
  id?: string;
  firstName?: string;
  middleName?: string;
  active?: boolean;
  lastName?: string;
  email?: string;
  phone?: string;
  gender?: "male" | "female" | "other";
  dob?: string;
  accountNumber?: string;
  occupation?: string;
  currency?: "USD" | "EUR" | "GBP";
  nationality?: string;
  maritalStatus?: 'single' | 'married' | 'complicated' | 'divorced' |'widowed' | 'separated' | 'domestic partnership';
  street?: string;
  city?: string;
  state?: string;
  country?: string;
  zipCode?: string;
  availableBalance?: number;
  currentBalance?: number;
  imf?: string;
  cot?: string;
  status?: "pending" | "failed" | "success";
  accountType?: "savings" | "checking" | "business" | "student";
  pin?: string;
  password?: string;
};



export type TTransaction = {
  accountHolder: string;
  accountNumber: string;
  transactionType: 'credit' | 'debit';
  description: string;
  amount: number;
  status: 'pending' | 'success' | 'failed';
  date: number;
  userID: string;
  transactionID: string;
  accountBalance: number;
};


export type TOptions = {
  label: string 
  value: string
}

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
  status?: 'pending' | 'success' | 'failed';  
  senderId?: string;
  recipientId?: string;
  id?: string;
};
