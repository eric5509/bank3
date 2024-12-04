'use client'
import React, { useEffect } from 'react'
import TableLayout from '../admin/TableLayout'
import { motion } from "framer-motion";
import { TAccount } from '@/provider/slice/type'
import { useAppDispatch, useAppSelector } from '@/provider/store/hook'
import { loadAccounts, setAccount } from '@/provider/slice/account'
import { openModal } from '@/provider/slice/modal'
 

export default function AccountTable() {
    const style = 'p-3 text-sm text-start'
    const titles = ['Account Holder', 'Account Number', 'Email', 'Phone', 'Balance', 'Status', 'Active']
    const storeData = useAppSelector(store => store.account.displayedAccounts)
    const dispatch = useAppDispatch()
     

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
                        transition={{ duration: 0.5, delay: key * 0.05 }}
                        onClick={() => {
                            dispatch(openModal('account'))
                            dispatch(setAccount(storeData[key]))
                        }} className={`${key !== storeData?.length - 1 && "border-b-2 border-gray-900"} cursor-pointer hover:bg-black hover:text-white duration-500`} key={key}>
                        <td className={`${style} flex items-center gap-3`}>
                            <span className="h-11 w-11 shrink-0 border-2 rounded-full"></span>
                            <span className="font-semibold capitalize">{el.firstName} {el.middleName} {el.lastName}</span>
                        </td>
                        <td className={`${style}`}>{el.accountNumber}</td>
                        <td className={`${style}`}>{el.email}</td>
                        <td className={`${style}`}>{el.phone}</td>
                        <td className={`${style} font-semibold`}>${el.availableBalance.toLocaleString()}</td>
                        <td className={`${style} capitalize
                         ${el.status === 'pending' && 'text-yellow-500'} 
                         ${el.status === 'success' && 'text-green-500'} 
                         ${el.status === 'failed' && 'text-red-500'} 
                         `}>{el.status}</td>
                        <td className={`${style} 
                         ${el.active && 'text-[lightgreen]'} 
                         ${!el.active && 'text-[gray]'} 
                        `}>{el.active ? 'Active' : 'Inactive'}</td>
                    </motion.tr>
                ))}
            </tbody>
        </TableLayout>
    )
}
