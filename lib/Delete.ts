import {
  deleteTransactionLink,
  deleteTransferLink,
  deleteUserLink,
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      return await response.json();
    } catch (error: any) {
      return { data: null, error: error.message, success: false };
    }
  }
};

export const deleteTransfer = async (
  id: string | undefined
): Promise<TResponse | undefined> => {
  if (id) {
    console.log(id);
    try {
      const response = await fetch(`${deleteTransferLink}${id}`, {
        method: "DELETE",
      });
      return await response.json();
    } catch (error: any) {
      return { data: null, message: error.message, success: false };
    }
  }
};

export const deleteTransaction = async (
  id: string | undefined
): Promise<TResponse | undefined> => {
  if (id) {
    console.log(id);
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
