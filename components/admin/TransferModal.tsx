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
import { deleteTransfer } from "./Request";

type Props = {
  modal: string
}

export default function TransferModal({ modal }: Props) {
  const storeData = useAppSelector(store => store.transfer.transfer)
  const [loading, setLoading] = useState(false)
  const dispatch = useAppDispatch()
  const DeleteTransfer = async () => {
    const deleteResult = await deleteTransfer(storeData?.id)
    console.log(deleteResult)
  }
  useEffect(() => {
    console.log(storeData, 'Status')
  }, [storeData])
  return (
    <ModalLayout modal={modal}>
      <div className="flex items-center gap-4">
        <div className="w-full">
          <div className="flex items-center justify-between">
            <div className="flex gap-5 items-center">
              <img alt="" className="h-24 w-24 rounded-full border-2" src="a" />
              <Link href={"/accounts/5"} className="text-2xl capitalize duration-300 hover:text-blue-500 hover:underline font-semibold">
                {storeData?.senderAccountName}
              </Link>
            </div>
            <div className="flex items-center gap-7">
              <Dropdown />
              <div onClick={DeleteTransfer} className="">
                <Delete loading={loading} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-7">
        <div className="grid mb-5 text-[15px] grid-cols-3 gap-5">
          <LabelValue capitalize label="Sender" value={storeData?.senderAccountName} />
          <LabelValue label="Sender Account Number" value={storeData?.senderAccountNumber} />
          <LabelValue capitalize label="Sender Bank Name" value={storeData?.senderBankName} />
          <LabelValue capitalize label="Recipient" value={storeData?.recipientAccountName} />
          <LabelValue label="Recipient Account Number " value={storeData?.recipientAccountNumber} />
          <LabelValue capitalize label="Recipient Bank Name" value={storeData?.recipientBankName} />
          <LabelValue label="Amount" capitalize value={`$${storeData?.amount?.toLocaleString()}`} />
          <LabelValue label="Description" value={storeData?.description} />
          <LabelValue label="Date" value={storeData?.date} />
        </div>
        <div className="flex justify-end">
          <PenButton />
        </div>
      </div>
    </ModalLayout>
  );
}
