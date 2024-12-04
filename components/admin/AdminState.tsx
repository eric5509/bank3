'use client'

import { loadAccounts, loadOptions } from "@/provider/slice/account"
import { loadLoanAccounts } from "@/provider/slice/loan"
import { loadTransactions } from "@/provider/slice/transactions"
import { loadTransfers } from "@/provider/slice/transfer"
import { TLoan, TOptions, TTransaction, TTransfer } from "@/provider/slice/type"
import { useAppDispatch } from "@/provider/store/hook"
import { useEffect } from "react"


type Props = {
    accounts: TAccount[]
    options: TOptions[]
    transfers: TTransfer[]
    transactions: TTransaction[]
    loans: TLoan[]
}

export default function AdminState({ options, accounts, loans, transactions, transfers }: Props) {
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (options?.length > 0) dispatch(loadOptions(options))
        if (accounts?.length > 0) dispatch(loadAccounts(accounts))
        if (loans?.length > 0) dispatch(loadLoanAccounts(loans))
        if (transactions?.length > 0) dispatch(loadTransactions(transactions))
        if (transfers?.length > 0) dispatch(loadTransfers(transfers))
    }, [])

    return (
        <div></div>
    )
}
