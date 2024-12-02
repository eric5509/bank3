type Address = {
  state: string;
  city: string;
  country: string;
  street: string;
  postalCode: string;
};

type TAccount = {
  accountID: string;
  firstName: string;
  lastName: string;
  middleName: string;
  phone: string;
  email: string;
  occupation: string;
  gender: "male" | "female" | "other";
  residentialAddress: Address;
  birthDate: string; // In the format "YYYY-MM-DD"
  imf: string;
  cot: string;
  currentBalance: number;
  availableBalance: number;
  maritalStatus: "single" | "married" | "divorced" | "widowed";
  country: string;
  accountNumber: string;
  routingNumber: string;
  accountType: "checking" | "savings" | "business";
  status: "success" | "on-hold" | "pending" | "blocked";
  active: boolean;
  currency: string; // e.g., "USD", "GBP", "AED"
};
 