type Address = {
  state: string;
  city: string;
  country: string;
  street: string;
  postalCode: string;
};

export type TAccount = {
  accountID?: string;
  firstName: string;
  lastName: string;
  middleName: string;
  phone: string;
  email: string;
  occupation: string;
  gender: "male" | "female" | "other";
  state: string
  street: string
  city: string
  country: string
  zipCode: string
  dob: string;  
  imf: string;
  cot: string;
  currentBalance: string;
  availableBalance: string;
  maritalStatus: "single" | "married" | "divorced" | "widowed";
  nationality: string;
  accountNumber: string;
  cryptoTransfer?: boolean;
  routingNumber?: string;
  accountType: "checking" | "savings" | "business";
  status: "success" | "on-hold" | "pending" | "blocked";
  active: boolean;
  transferPin: string
  authPin: string 
  password: string
  verified: boolean
  admin: boolean
  currency: "USD"| "GBP"| "EUR";
}
 