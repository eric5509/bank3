'use client'
import React, { useEffect } from 'react'
import Title from '../global/Title'
import Button from '../global/Button'
import { useAppDispatch, useAppSelector } from '@/provider/store/hook'
import { loadAccounts } from '@/provider/slice/account'
import AccountTable from '../AccountAdmin/AccountTable'

type Props = {
    accounts: TAccount[]
}

export default function Base({ accounts }: Props) {
    const dispatch = useAppDispatch()
    const storeData = useAppSelector(store => store.account.displayedAccounts)

    useEffect(() => {
        if (accounts?.length > 0) dispatch(loadAccounts(accounts))
    }, [])

    return (
        <div className="p-3 flex-1 flex flex-col w-full">
            <div className="z-30 py-3 flex items-center justify-between relative">
                <Title title="All Accounts" />
                <div className="flex gap-6">
                    <Button link='/admin/account/create' style={{ background: "green" }} title='Create Account' />
                </div>
            </div>
            {storeData.length > 0
                ? <AccountTable />
                : <div className="flex-1 w-full h-full text-xl font-semibold text-white grid place-content-center">No Accounts to be Displayed</div>
            }
        </div>
    )
}