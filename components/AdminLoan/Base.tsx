'use client'
import React, { useEffect } from 'react'
import Title from '../global/Title'
import Dropdown from '../global/Dropdown'
import Button from '../global/Button'
import { TLoan } from '@/provider/slice/type'
import { useAppDispatch, useAppSelector } from '@/provider/store/hook'
import { loadLoanAccounts } from '@/provider/slice/loan'
import LoanTable from '../tables/LoanTable'


export default function Base() {
    const storeData = useAppSelector(store => store.loan.displayedLoans)

    return (
        <div className="flex-1 flex flex-col">
            <div className='flex mb-3 z-30 relative justify-between items-center'>
                <Title title='Loans' />
                <div className="flex gap-4">
                    <Button modal='loan' title='Apply for Loan' />
                    <Dropdown />
                </div>
            </div>
            {storeData.length > 0
                ?
                <LoanTable />
                :
                <div className="flex-1 text-2xl font-semibold grid text-white place-content-center">
                    <p>No Loans Found</p>
                </div>
            }
        </div>
    )
}
