'use client'
import Button from "@/components/global/Button";
import Dropdown from "@/components/global/Dropdown";
import Title from "@/components/global/Title";
import { useAppDispatch, useAppSelector } from "@/provider/store/hook";
import { loadTransfers } from "@/provider/slice/transfer";
import { loadAccounts, loadOptions } from "@/provider/slice/account";
import { useEffect } from "react";
import { TOptions, TTransfer } from "@/provider/slice/type";
import TransferTable from "../tables/TransferTable";




export default function Base() {
    const storeData = useAppSelector(store => store.transfer.displayedTransfers)
    return (
        <div className="flex flex-1 h-full flex-col">
            <div className='flex mb-3 justify-between items-center'>
                <Title title="Transfer" />
                <div className="flex gap-4">
                    <Button style={{ background: 'green' }} modal='inboundTransfer' title={`Transfer to Capital Bank`} />
                    <Button style={{ background: 'red' }} modal='outboundTransfer' title={`Transfer from Capital Bank`} />
                    <Button style={{ background: 'blue' }} modal='internalTransfer' title={`Local Transfer`} />
                    <Dropdown />
                </div>
            </div>
            {storeData?.length > 0 ?
                <TransferTable />
                :
                <div className="flex-1 grid place-content-center ">
                    <p className="text-2xl font-semibold text-white">No Transfer History </p>
                </div>
            }
        </div>
    )
}
