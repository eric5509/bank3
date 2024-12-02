import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TTransfer } from "./type";

type TInitialState = {
  transfers: TTransfer[];
  displayedTransfers: TTransfer[];
  transfer: TTransfer | null;
};

const initialState: TInitialState = {
  transfers: [],
  transfer: null,
  displayedTransfers: [],
};

export const TransferSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    loadTransfers: (state, action: PayloadAction<TTransfer[]>) => {
      state.transfers = action.payload.slice().reverse();
      state.displayedTransfers = state.transfers;
    },
    setTransfer: (state, action) => {
      console.log(action.payload)
      state.transfer = action.payload
    }
  },
});

export const {
    loadTransfers,
    setTransfer
} = TransferSlice.actions;
