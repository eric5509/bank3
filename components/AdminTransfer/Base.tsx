'use client'
import Button from "@/components/global/Button";
import Dropdown from "@/components/global/Dropdown";
import Title from "@/components/global/Title";
import { useAppDispatch, useAppSelector } from "@/provider/store/hook";
import { loadTransfers } from "@/provider/slice/transfer";
import { loadAccounts, loadOptions } from "@/provider/slice/account";
import { useEffect, useState } from "react";
import { TOptions, TTransfer } from "@/provider/slice/type";
import TransferTable from "../tables/TransferTable";
import { deleteAccount, fetchAllUsers } from "../admin/Request";


type Props = {
    transfers: TTransfer[]
    accounts: TAccount
    options: TOptions[]

}

export default function Base({ transfers, accounts, options }: Props) {

    const dispatch = useAppDispatch()
    const storeData = useAppSelector(store => store.transfer.displayedTransfers)
    const [data, setData] = useState([])

    const runFunction = async () => {
        const data = await fetchAllUsers()
        const accountDeleted = await deleteAccount('674c4be61fcb2e91b3cb5317')
        console.log(data)
    }
    

    useEffect(() => {
        dispatch(loadTransfers(transfers))
        dispatch(loadAccounts(accounts))
        dispatch(loadOptions(options))
    }, [dispatch])

    return (
        <div className="flex flex-1 h-full flex-col">
            <button className="px-5 py-3 bg-green-500 text-white font-semibold" onClick={runFunction}>Hello Boss</button>
            <div className='flex mb-3 justify-between items-center'>
                <Title title="Transfer" />
                <div className="flex gap-4">
                    <Button style={{ background: 'green' }} modal='inboundTransfer' title={`Transfer to Capital Bank`} />
                    <Button style={{ background: 'red' }} modal='outboundTransfer' title={`Transfer from Capital Bank`} />
                    <Button style={{ background: 'blue' }} modal='internalTransfer' title={`Local Transfer`} />
                    <Dropdown />
                </div>
            </div>
            {storeData.length > 0 && <TransferTable />}
            {storeData.length === 0 &&
                <div className="flex-1 grid place-content-center ">
                    <p className="text-2xl font-semibold text-white">No Transfer History </p>
                </div>
            }
        </div>
    )
}
