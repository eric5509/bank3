import { ValuesDataType } from "@/components/admin/data";
import { creditLink, debitLink, inboundTransferLink, loanApplicationLink, outboundTransferLink, transactionsLink } from "./links";
import { TLoan, TTransferInBound, TTransferOutBound } from "@/provider/slice/type";

export const CreateAccount = async (values: ValuesDataType) => {
  try {
    const response = await fetch("http://localhost:5000/user/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    return response.json();
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
    return response.json();
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
    const result = await response.json();
    if (result.success) {
      return { success: true, data: result.data, message: result.message };
    }
    return { success: false, data: null, message: result.message };
  } catch (error: any) {
    return {
      success: false,
      message: error.message || "Something went wrong",
      data: null,
    };
  }
};

export const sendTokenAfterRegistration = async ({
  code,
  firstName,
}: {
  code: string;
  firstName: string;
}) => {
  try {
    const response = await fetch("http://localhost:3000/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code,
        firstName,
      }),
    });
    return await response.json();
  } catch (error: any) {
    return { success: false, message: error.message, data: null };
  }
};



type NewLoanType = Omit<TLoan, 'user' | 'accountHolder'>;
export const InitializeLoanApplication = async (values: NewLoanType) => {
  try {
    const response = await fetch(loanApplicationLink, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    return response.json();
  } catch (error: any) {
    return { success: false, message: error.message || "Something went wrong" };
  }
};
