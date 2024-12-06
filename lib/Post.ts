import { ValuesDataType } from "@/components/admin/data";
import {
  creditLink,
  debitLink,
  inboundTransferLink,
  loanApplicationLink,
  loginLink,
  outboundTransferLink,
  transactionsLink,
  verifyOtpLink,
  verifyPinLink,
} from "./links";
import {
  TCredit,
  TLoan,
  TTransferInBound,
  TTransferOutBound,
} from "@/provider/slice/type";

export const CreateAccount = async (values: ValuesDataType) => {
  try {
    const response = await fetch("http://localhost:5000/user/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const data = await response.json();
    return data
  } catch (error: any) {
    return { success: false, message: error.message || "Something went wrong" };
  }
};

export const InitializeOutboundTransfer = async (values: TTransferOutBound) => {
  try {
    const response = await fetch(outboundTransferLink, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const data = await response.json();
    return data
  } catch (error: any) {
    return { success: false, message: error.message || "Something went wrong" };
  }
};

export const InitializeInboundTransfer = async (values: TTransferInBound) => {
  try {
    const response = await fetch(inboundTransferLink, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const data = await response.json();
    return data
  } catch (error: any) {
    return {
      success: false,
      message: error.message || "Something went wrong",
      data: null,
    };
  }
};

export const SendSignupOTP = async ({
  otp,
  firstName,
}: {
  otp: string;
  firstName: string;
}) => {
  try {
    const response = await fetch("http://localhost:3000/api/email/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        otp,
        firstName,
      }),
    });
    const data = await response.json();
    return data
  } catch (error: any) {
    return { success: false, message: error.message, data: null };
  }
};
export const SendLoginOTP = async ({
  otp,
  firstName,
}: {
  otp: string;
  firstName: string;
}) => {
  try {
    const response = await fetch("http://localhost:3000/api/email/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        otp,
        firstName,
      }),
    });
    const data = await response.json();
    return data
  } catch (error: any) {
    return { success: false, message: error.message, data: null };
  }
};


export const InitializeLoanApplication = async (values: Omit<TLoan, "user" | "accountHolder" | "loanID">) => {
  try {
    const response = await fetch(loanApplicationLink, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const data = await response.json();
    return data;
  } catch (error: any) {
    return { success: false, message: error.message || "Something went wrong", data: null };
  }
};


export const CreditAccount = async (values: TCredit) => {
  try {
    const response = await fetch(creditLink, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const data = await response.json();
    return data;
  } catch (error: any) {
    return { success: false, message: error.message || "Something went wrong", data: null };
  }
};


export const DebitAccount = async (values: TCredit) => {
  try {
    const response = await fetch(debitLink, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const data = await response.json();
    return data;
  } catch (error: any) {
    return { success: false, message: error.message || "Something went wrong", data: null };
  }
};

export const InitializeLogin = async (values: {accountNumber: string, password: string}) => {
  try {
    const response = await fetch(loginLink, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const data = await response.json();
    return data;
  } catch (error: any) {
    return { success: false, message: error.message || "Something went wrong", data: null };
  }
};
export const ProcessPINValidation = async (values: {authPin: string, accountNumber: string | null}) => {
  console.log(values)
  try {
    const response = await fetch(verifyPinLink, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const data = await response.json();
    return data;
    
  } catch (error: any) {
    return { success: false, message: error.message || "Something went wrong", data: null };
  }
};
export const ProcessOTPValidation = async (values: {otp: string, email: string}) => {
  try {
    const response = await fetch(verifyOtpLink, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const data = await response.json();
    return data;
  } catch (error: any) {
    return { success: false, message: error.message || "Something went wrong", data: null };
  }
};

