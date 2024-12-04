'use client'
import React, { useEffect } from 'react'
import { motion } from "framer-motion";
import TableLayout from '../admin/TableLayout'
import { TAccount, TTransaction } from '@/provider/slice/type'
import { useAppDispatch, useAppSelector } from '@/provider/store/hook'
import { openModal } from '@/provider/slice/modal'
import { setTransaction } from '@/provider/slice/transactions';

export default function TransactionTable() {
    const style = 'p-3 text-sm text-start'
    const titles = ['Account Holder', 'Description', 'Account Balance', 'Amount', 'Date', 'Type', 'Status']
    const dispatch = useAppDispatch()
    const storeData = useAppSelector(store => store.transaction.displayedTransactions)
    console.log(storeData)
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
                            dispatch(openModal('transaction'))
                            dispatch(setTransaction(el))
                        }} className={`${key !== storeData?.length - 1 && "border-b-2 border-gray-900"} cursor-pointer hover:bg-black hover:text-white duration-500`} key={key}>
                        <td className={`${style} flex items-center gap-3`}>
                            <span className="h-11 w-11 shrink-0 border-2 rounded-full"></span>
                            <span className="font-semibold capitalize">{el.accountHolder}</span>
                        </td>
                        <td className={`${style}`}>{el.description}</td>
                        <td className={`${style} font-semibold`}>${el.accountBalance?.toLocaleString()}</td>
                        <td className={`${style} ${el.transactionType === 'credit' ? 'text-green-500' : 'text-red-500'}`}>{el.transactionType === 'credit' ? '+' : '-'}${el.amount?.toLocaleString()}</td>
                        <td className={`${style}`}>{el.date}</td>
                        <td className={`${style} capitalize `}>{el.transactionType}</td>
                        <td className={`${style} capitalize
                         ${el.status === 'pending' && 'text-yellow-500'} 
                         ${el.status === 'success' && 'text-green-500'} 
                         ${el.status === 'failed' && 'text-red-500'} 
                         `}>{el.status}</td>
                    </motion.tr>
                ))}
            </tbody>
        </TableLayout>
    )
}
