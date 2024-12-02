'use client'
import { TOptions, TTransaction } from "@/provider/slice/type";
import AnimatePageLayout from "../global/AnimatePageLayout";
import Button from "../global/Button";
import Dropdown from "../global/Dropdown";
import Title from "../global/Title";
import TransactionTable from "../tables/TransactionTable";
import { loadTransactions } from "@/provider/slice/transactions";
import { useAppDispatch, useAppSelector } from "@/provider/store/hook";
import { loadAccounts, loadOptions } from "@/provider/slice/account";
import { useEffect } from "react";


type Props = {
    transactions: TTransaction[]
    accounts: TAccount
    options: TOptions[]
}

export default function Base({ accounts: accountsData, options, transactions: transactionsData }: Props) {
    const dispatch = useAppDispatch()
    const accounts = useAppSelector(store => store.account.accounts)
    const transactions = useAppSelector(store => store.transaction.transactions)
    useEffect(() => {
        dispatch(loadTransactions(transactionsData))
        dispatch(loadAccounts(accountsData))
        dispatch(loadOptions(options))
        console.log(accountsData, transactionsData)
    }, [dispatch])
    return (
        <div className="flex-1 flex flex-col">
            <div className='flex  mb-7 justify-between'>
                <Title title="Transactions" />
                <div className="flex gap-4">
                    <Button modal='credit' style={{ background: 'green' }} title='Credit Account' />
                    <Button modal='debit' style={{ background: 'red' }} title='Debit Account' />
                    <Dropdown />
                </div>
            </div>
            {transactions.length > 0 && <TransactionTable />}
            {transactions.length === 0 &&
                <div className="flex-1 grid place-content-center ">
                    <p className="text-2xl font-semibold text-white">No Transaction History </p>
                </div>
            }
        </div>
    )
}
