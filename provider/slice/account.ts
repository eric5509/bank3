import { createSlice } from "@reduxjs/toolkit";
import { TAccount, TAccount2 } from "./type";

type TInitialState = {
  accounts: TAccount[];
  options: {
    label: string 
    value: string
  }[]
  displayedAccounts: TAccount[];
  account: TAccount2 ;
};

const initialState: TInitialState = {
  accounts: [],
  options: [],
  displayedAccounts: [],
  account: {}
};

export const AccountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    loadOptions: (state, action) => {
      state.options = action.payload
    },
    emptyAccounts: (state) => {
      state.displayedAccounts = []
      state.accounts = []
    },
    loadAccounts: (state, action) => {
      state.accounts = action.payload.slice().reverse();  
      state.displayedAccounts = state.accounts;
    },
    setAccount: (state, action) => {
      state.account = action.payload;
    },
    filterAccount: (state, action) => {
      const value = action.payload;
      if (value === "all") {
        state.displayedAccounts = state.accounts;
      }
      if (value === "active") {
        state.displayedAccounts = state.accounts.filter((el) => el.active);
      }
      if (value === "inactive") {
        state.displayedAccounts = state.accounts.filter((el) => !el.active)
      } else {
        state.displayedAccounts = state.accounts.filter((el) => el.status === value);
      }
    },
    editAccount: (state, action) => {
      let { id, active, ...rest } = action.payload;
      active = active === 'active' ? true : false
      const newArray = state.displayedAccounts.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            ...rest,
            active,
          };
        }
        return el;
      });
      state.displayedAccounts = newArray;
      state.accounts = { ...state.accounts, ...state.displayedAccounts };
    },
    deleteAccount: (state, action) => {
      const { id } = action.payload;
      const newArray = state.displayedAccounts.filter((el) => el.id !== id);
      const newArray2 = state.accounts.filter((el) => el.id !== id);
      state.displayedAccounts = newArray;
      state.accounts = newArray2;
    },
    getAllAccount: (state) => {
      state.displayedAccounts = state.accounts;
    },
  },
});

export const {
  filterAccount,
  getAllAccount,
  deleteAccount,
  emptyAccounts,
  editAccount,
  loadOptions,
  setAccount,
  loadAccounts,
} = AccountSlice.actions;
