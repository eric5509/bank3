"use client";
import Link from "next/link";
import LabelValue from "../global/LabelValue";
import Delete from "../global/Delete";
import PenButton from "../global/PenButton";
import ModalLayout from "./ModalLayout";
import { useAppDispatch, useAppSelector } from "@/provider/store/hook";
import { closeModal } from "@/provider/slice/modal";
import axios from "axios";
import { deleteTransactionLink, transactionsLink } from "@/lib/links";
import { loadTransactions } from "@/provider/slice/transactions";
import { useEffect, useState } from "react";
import TransactionUpdateDropdown from "../global/TransactionUpdateDropdown";

type Props = {
  modal: string
}

export default function TransactionModal({ modal }: Props) {
  const storeData = useAppSelector(store => store.transaction.transaction)
  const [loading, setLoading] = useState(false)
  const dispatch = useAppDispatch()
  const deleteTransaction = async () => {
    if(loading) return
    try {
      setLoading(true)
      const response = await axios.delete(`${deleteTransactionLink}${storeData?.transactionID}`);
      if (response.statusText === 'OK') {
        const response = await axios.get(transactionsLink);
        dispatch(loadTransactions(response.data.data))
        dispatch(closeModal())
      }
    } catch (error) {
    }
    finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    console.log(storeData, 'Status')
  }, [storeData])
  return (
    <ModalLayout modal={modal}>
      <div onClick={() => console.log(storeData)} className="flex items-center gap-4">
        <div className="w-full">
          <div className="flex items-center justify-between">
            <div className="flex gap-5 items-center">
              <img alt="" className="h-24 w-24 rounded-full border-2" src="a" />
              <Link href={"/accounts/5"} className="text-2xl duration-300 capitalize hover:text-blue-500 hover:underline font-semibold">
                {storeData?.accountHolder}
              </Link>
            </div>
            <div className="flex items-center gap-7">
              <TransactionUpdateDropdown id={storeData?.transactionID} Status={storeData?.status}/>
              <div onClick={deleteTransaction} className="">
                <Delete loading={loading}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-7">
        <div className="grid mb-5 text-[15px] grid-cols-3 gap-5">
          <LabelValue label="Account Number" value={storeData?.accountNumber} />
          <LabelValue label="Amount" value={`$${storeData?.amount?.toLocaleString()}`} />
          <LabelValue label="Transaction Type" uppercase value={storeData?.transactionType} />
          <LabelValue label="Account Balance" value={`$${storeData?.accountBalance?.toLocaleString()}`} />
          <LabelValue label="Description" value={storeData?.description} />
          <LabelValue label="Date" value={storeData?.date.toString().slice(0, 10)} />
        </div>
        <div className="flex justify-end">
          <PenButton />
        </div>
      </div>
    </ModalLayout>
  );
}
