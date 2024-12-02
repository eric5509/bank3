import { createSlice } from "@reduxjs/toolkit";
import { TTransaction } from "./type";

type TInitialState = {
  transactions: TTransaction[];
  displayedTransactions: TTransaction[];
  transaction: TTransaction | null;
};

const initialState: TInitialState = {
  transactions: [],
  transaction: null,
  displayedTransactions: [],
};

export const TransactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    loadTransactions: (state, action) => {
      state.transactions = action.payload.slice().reverse();
      state.displayedTransactions = state.transactions;
    },
    filterTransactions: (state, action) => {
      const value = action.payload;
      state.displayedTransactions = state.transactions.filter(
        (el) => el.status === value
      );
    },
    setTransaction: (state, action) => {
      state.transaction = action.payload;
    },
    getAllTransactions: (state) => {
      state.displayedTransactions = state.transactions;
    },
  },
});

export const {
  filterTransactions,
  setTransaction,
  getAllTransactions,
  loadTransactions,
} = TransactionSlice.actions;
