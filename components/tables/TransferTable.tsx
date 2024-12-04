'use client'
import React, { useEffect } from 'react'
import { motion } from "framer-motion";
import TableLayout from '../admin/TableLayout'
import { TAccount, TOptions, TTransaction, TTransfer } from '@/provider/slice/type'
import { useAppDispatch, useAppSelector } from '@/provider/store/hook'
import { openModal } from '@/provider/slice/modal'
import { loadTransactions, setTransaction } from '@/provider/slice/transactions'
import { loadAccounts } from '@/provider/slice/account'
import { loadTransfers, setTransfer } from '@/provider/slice/transfer';

export default function TransferTable() {
    const style = 'p-3 text-sm text-start'
    const titles = [
        'Sender',
        'Sender Account Number',
        'Recipient',
        'Recipient Account Number',
        'Amount',
        'Status'
    ];
    const dispatch = useAppDispatch()
    const storeData = useAppSelector(store => store.transfer.displayedTransfers)


    useEffect(() => {
    }, [
        
    ])


    return (
        <TableLayout>
            <thead>
                <tr className="border-b-2 border-white">
                    {titles.map((el, key) => (
                        <th key={key} className={`px-4 py-5 text-15 text-start`}>{el}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {storeData.map((el, key) => (
                    <motion.tr
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.5, delay: key * 0.05 }} onClick={() => {
                            dispatch(openModal('transfer'))
                            dispatch(setTransfer(el))
                        }} className={`${key !== storeData?.length - 1 && "border-b-2 border-gray-900"} cursor-pointer hover:bg-black hover:text-white duration-500`} key={key}>
                        <td className={`${style} flex items-center gap-3`}>
                            <span className="h-11 w-11 shrink-0 border-2 rounded-full"></span>
                            <span className="font-semibold capitalize">{el?.senderAccountName}</span>
                        </td>
                        <td className={`${style}`}>{el.senderAccountNumber}</td>
                        <td className={`${style} capitalize `}>{el?.recipientAccountName}</td>
                        <td className={`${style} capitalize `}>{el?.recipientAccountNumber}</td>
                        <td className={`${style} capitalize `}>${el.amount?.toLocaleString()}</td>
                        <td className={`${style} capitalize
                         ${el?.status === 'pending' && 'text-yellow-500'} 
                         ${el?.status === 'success' && 'text-green-500'} 
                         ${el?.status === 'failed' && 'text-red-500'} 
                         `}>{el?.status}</td>
                    </motion.tr>
                ))}
            </tbody>
        </TableLayout>
    )
}
