"use client";
import { Calendar, Mail, PhoneCall } from "lucide-react";
import Link from "next/link";
import PenButton from "../global/PenButton";
import Dropdown from "../global/Dropdown";
import Delete from "../global/Delete";
import LabelValue from "../global/LabelValue";
import ModalLayout from "./ModalLayout";
import { useAppDispatch, useAppSelector } from "@/provider/store/hook";
import { useEffect, useState } from "react";
import { deleteLoan, deleteTransfer } from "@/lib/Delete";
import { fetchAllLoans, fetchAllTransfer } from "@/lib/Get";
import { loadTransfers } from "@/provider/slice/transfer";
import { closeModal } from "@/provider/slice/modal";
import { loadLoanAccounts } from "@/provider/slice/loan";

type Props = {
  modal: string
}

export default function LoanDetailsModal({ modal }: Props) {
  const storeData = useAppSelector(store => store.loan.loan)
  const [loading, setLoading] = useState(false)
  const dispatch = useAppDispatch()
  const DeleteLoan = async () => {
    setLoading(true)
    const deleteResult = await deleteLoan(storeData?.loanID)
    console.log(deleteResult, storeData)
    if(deleteResult?.success){
      const result = await fetchAllLoans()
      dispatch(loadLoanAccounts(result.data))
      setLoading(false)
      return dispatch(closeModal())
    }
    setLoading(false)
  }
  return (
    <ModalLayout modal={modal}>
      <div className="flex items-center gap-4">
        <div className="w-full">
          <div className="flex items-center justify-between">
            <div className="flex gap-5 items-center">
              <img alt="" className="h-24 w-24 rounded-full border-2" src="a" />
              <Link href={"/accounts/5"} className="text-2xl capitalize duration-300 hover:text-blue-500 hover:underline font-semibold">
                {storeData?.accountHolder}
              </Link>
            </div>
            <div className="flex items-center gap-7">
              <Dropdown Status={storeData?.status}/>
              <div onClick={DeleteLoan} className="">
                <Delete loading={loading} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-7">
        <div className="grid mb-5 text-[15px] grid-cols-3 gap-5">
          <LabelValue capitalize label="Account Holder" value={storeData?.accountHolder} />
          <LabelValue label="Account Number" value={storeData?.accountNumber} />
          <LabelValue label="Amount" capitalize value={`$${storeData?.amount?.toLocaleString()}`} />
          <LabelValue capitalize label="Reason " value={storeData?.reason} />
          <LabelValue capitalize label="Date" value={storeData?.date} />
        </div>
        <div className="flex justify-end">
          <PenButton />
        </div>
      </div>
    </ModalLayout>
  );
}
