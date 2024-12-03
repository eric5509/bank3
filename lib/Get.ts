import { allLoansLink, allTransferLink, transactionsLink, usersLink } from "@/lib/links";

export const fetchAllUsers = async () => {
  try {
    const response = await fetch(usersLink);
    return await response.json();
  } catch (error: any) {
    return { data: null, message: error.message, success: false };
  }
};

export const fetchSingleUser = async (id: string) => {
  try {
    const response = await fetch(`${usersLink}${id}`);
    return await response.json();
  } catch (error: any) {
    return { data: null, message: error.message, success: false };
  }
};

export const fetchAllTransactions = async () => {
  try {
    const response = await fetch(transactionsLink);
    return await response.json();
  } catch (error: any) {
    return { data: null, message: error.message, success: false };
  }
};

export const fetchAllTransfer = async () => {
  try {
    const response = await fetch(allTransferLink);
    return await response.json();
  } catch (error: any) {
    return { data: null, message: error.message, success: false };
  }
};

export const fetchAllLoans = async () => {
  try {
    const response = await fetch(allLoansLink);
    return await response.json();
  } catch (error: any) {
    return { data: null, message: error.message, success: false };
  }
};
