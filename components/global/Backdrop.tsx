'use client'
import { useAppDispatch, useAppSelector } from "@/provider/store/hook"
import CreditModal from "../admin/CreditModal"
import { closeModal } from "@/provider/slice/modal"
import AccountModal from "../AccountAdmin/AccountModal"
import DebitModal from "../admin/DebitModal"
import TransactionModal from "../admin/TransactionModal"
import TransferInbound from "../admin/TransferInbound"
import TransferOutbound from "../admin/TransferOutbound"
import TransferInternal from "../admin/TransferInternal"
import TransferModal from "../admin/TransferModal"
import { useEffect, useState } from "react"
import { loadOptions } from "@/provider/slice/account"
import { optionsLink } from "@/lib/links"
import LoanModal from "../admin/LoanModal"
import LoanDetailsModal from "../admin/LoanDetailsModal"

export default function Backdrop() {
    const [loading, setLoading] = useState(false)
    const opened = useAppSelector(store => store.modal.value)
    const dispatch = useAppDispatch()
       
    return (
        <div className={`${opened !== "" ? "opacity-100 visible" : "invisible opacity-0"} overflow-y-auto duration-500 h-screen w-full grid place-content-center top-0 left-0 delay-200 backdrop-blur-md bg-black/10 fixed z-[5000]`}>
            <CreditModal modal="credit" />
            <LoanModal modal="loan" />
            <LoanDetailsModal modal="loanDetails" />
            <DebitModal modal="debit" />
            <AccountModal modal="account" />
            <TransactionModal modal='transaction' />
            <TransferModal modal="transfer" />
            <TransferInbound />
            <TransferOutbound />
            <TransferInternal />
            <div onClick={() => dispatch(closeModal())} className="h-screen fixed z-[-20] top-0 left-0 w-full"></div>
        </div>
    )
}
