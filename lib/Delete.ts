import {
  deleteTransactionLink,
  deleteTransferLink,
  deleteUserLink,
  loanDeletionLink,
} from "@/lib/links";

export type TResponse = {
  data: any;
  message: string;
  success: boolean;
};

export const deleteAccount = async (id: string | undefined) => {
  if (id) {
    try {
      const response = await fetch(`${deleteUserLink}${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      return data;
    } catch (error: any) {
      return { data: null, error: error.message, success: false };
    }
  }
};

export const deleteLoan = async (id: string | undefined) => {
  if (id) {
    try {
      const response = await fetch(`${loanDeletionLink}${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      return data;
    } catch (error: any) {
      return { data: null, error: error.message, success: false };
    }
  }
};

export const deleteTransfer = async (id: string | undefined) => {
  if (id) {
    try {
      const response = await fetch(`${deleteTransferLink}${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      return data;
    } catch (error: any) {
      return { data: null, message: error.message, success: false };
    }
  }
};

export const deleteTransaction = async (id: string | undefined) => {
  if (id) {
    try {
      const response = await fetch(`${deleteTransactionLink}${id}`, {
        method: "DELETE",
      });
      return await response.json();
    } catch (error: any) {
      return { data: null, message: error.message, success: false };
    }
  }
};
