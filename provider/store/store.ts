import { configureStore } from "@reduxjs/toolkit";
import { AccountSlice } from "../slice/account";
import { ModalSlice } from "../slice/modal";
import { TransactionSlice } from "../slice/transactions";
import { TransferSlice } from "../slice/transfer";

export const store = configureStore({
    reducer:{
        account: AccountSlice.reducer,
        modal: ModalSlice.reducer,
        transaction: TransactionSlice.reducer,
        transfer: TransferSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store