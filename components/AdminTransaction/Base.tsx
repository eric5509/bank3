'use client'
import Button from "../global/Button";
import Dropdown from "../global/Dropdown";
import Title from "../global/Title";
import TransactionTable from "../tables/TransactionTable";
import { useAppSelector } from "@/provider/store/hook";



export default function Base() {
    const transactions = useAppSelector(store => store.transaction.transactions)
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
            {transactions?.length > 0
                ?
                <TransactionTable />
                :
                <div className="flex-1 grid place-content-center ">
                    <p className="text-2xl font-semibold text-white">No Transaction History </p>
                </div>
            }
        </div>
    )
}
