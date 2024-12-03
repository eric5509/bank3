import { createSlice } from "@reduxjs/toolkit";
import { TLoan } from "./type";

type TInitialState = {
  loans: TLoan[];
  displayedLoans: TLoan[];
  loan: TLoan | null ;
};

const initialState: TInitialState = {
  loans: [],
  displayedLoans: [],
  loan: null
};

export const LoanSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    loadLoanAccounts: (state, action) => {
      state.loans = action.payload.slice().reverse();  
      state.displayedLoans = state.loans;
    },
    setLoanAccount: (state, action) => {
      state.loan = action.payload;
    },
   
   
    
  },
});

export const {
    loadLoanAccounts, setLoanAccount
} = LoanSlice.actions;
