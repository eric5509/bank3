const errorMessages = {
  firstname: "Please enter your First Name",
  lastname: "Please enter your Last Name",
  middlename: "Please enter your Middle Name",
  gender: "Please select your Gender",
  city: "Please enter your City",
  state: "Please enter your State",
  country: "Please enter your Country",
  senderAccountName: "Please enter your Account Name",
  senderAccountNumber: "Please enter your Account Number",
  senderBankName: "Please enter your Bank Name ",
  recipientAccountName: "Please enter your Account Name",
  recipientAccountNumber: "Please enter your Account Number",
  recipientBankName: "Please enter your Bank Name ",
  status: "Please select the Status",
  amount: "Please enter an Amount",
  description: "Please enter a description",
  password: "Please enter your Password",
  value: "Please enter your Phone or Email",
  date: "Please enter a date",
  dob: "Please enter your Date of Birth",
  birthDate: "Please enter your Date of Birth",
  zipCode: "Please enter your Zip Code",
  zip: "Please enter your Zip Code",
  occupation: "Please enter your Occupation",
  postalCode: "Please enter your Postal Code",
  street: "Please enter your Street",
  availableBalance: "Please enter your Available Balance",
  maritalStatus: "Please select your Marital Status",
  accountType: "Please select your Account Type",
  phone: "Please enter your Phone Number",
  phoneNumber: "Please enter your Phone Number",
  nationality: "Please select your Nationality",
  accountNumber: "Please enter your Account Number",
  email: "Please enter your Email Address",
  currency: "Please select your Currency",
  authPin: "Please enter your Authentication Pin",
  transferin: "Please enter your Transfer Pin",
  cot: "Please enter your COT",
  imf: "Please enter your IMF",
  ssn: "Please enter your SSN",
};

export const validate = (values: any) => {
  const newObj = Object.entries(values).filter((el) => el[1] === "");
  const errorObject: any = {};
  const errors = newObj.map((el) => {
    errorObject[`${el[0]}`] = errorMessages[`${el[0]}`];
  });

  if (errors.length > 0) {
    return {
      valid: false,
      errors: errorObject,
    };
  }
  return {
    valid: true,
    errors: {},
  };
};
