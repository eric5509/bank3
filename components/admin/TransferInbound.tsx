'use client'
import { useState } from "react";
import Input from "../global/Input";
import ModalLayout from "./ModalLayout";
import Title from "../global/Title";
import Select from "../global/Select";
import Button2 from "../global/Button2";
import { useAppDispatch, useAppSelector } from "@/provider/store/hook";
import { validate } from "../global/Validate";
import { closeModal } from "@/provider/slice/modal";
import Success from "./Success";
import { loadTransfers } from "@/provider/slice/transfer";
import { TransferInboundInputInitialValues } from "./data";
import { InitializeInboundTransfer } from "@/lib/Post";
import { fetchAllTransfer } from "@/lib/Get";

export default function TransferInbound() {
    const [loading, setLoading] = useState(false)
    const options = useAppSelector(store => store.account.options)
    const [success, setSuccess] = useState(false)
    const dispatch = useAppDispatch()
    const [values, setValues] = useState(TransferInboundInputInitialValues)
    const [errors, setErrors] = useState(TransferInboundInputInitialValues)
    const onChange = (event: any) => {
        const { name, value } = event.target
        setValues({ ...values, [name]: value })
        setErrors({ ...errors, [name]: "" })
    }


    const fetchData = async () => {
        const result = await fetchAllTransfer()
        dispatch(loadTransfers(result.data))
    }


    const submit = async () => {
        const isValid = validate(values)
        if (!isValid.valid) return setErrors({ ...errors, ...isValid.errors })
        if (isNaN(Number(values.amount))) return setErrors({ ...errors, amount: 'Please input a valid amount' })
        setLoading(true)
        const result = await InitializeInboundTransfer(values);
        console.log(result.message)
        if (!result.success) {
            if (result.message === "Account does not exist") {
                setErrors({ ...errors, recipientAccountNumber: result.message })
            }
            if (result.message === "Sender and Recipient cannot be the same") {
                setErrors({ ...errors, recipientAccountNumber: result.message })
            }
            if (result.message === "Recipient Account Number not Valid") {
                setErrors({ ...errors, recipientAccountNumber: result.message })
            }
            if (result.message === "Insufficient funds") {
                setErrors({ ...errors, amount: result.message })
            }
            return setLoading(false)
        }
        await fetchData()
        setSuccess(true)
        setValues(TransferInboundInputInitialValues)
        setTimeout(() => { setSuccess(false); dispatch(closeModal()) }, 3000);
    }



    return (
        <ModalLayout success={success} modal="inboundTransfer">
            <Success success={success} />
            <div className="flex justify-between">
                <Title title="Transfer to Capital Bank" />
            </div>
            <div className="grid gap-5 mt-10 mb-5 grid-cols-2">
                <Select style='text-black' options={options} label="Recipient " name="recipientAccountNumber" onChange={onChange} value={values.recipientAccountNumber} error={errors.recipientAccountNumber} />
                <Input inputStyle={{ color: "black" }} label="Amount" name="amount" onChange={onChange} value={values.amount} error={errors.amount} />
                <Input inputStyle={{ color: "black" }} label="Description" name="description" onChange={onChange} value={values.description} error={errors.description} />
                <Select style="text-black" data={['', 'pending', 'success', 'failed']} label="Status" name="status" onChange={onChange} value={values.status} error={errors.status} />
                <Input inputStyle={{ color: "black" }} label="Sender Account Name" name="senderAccountName" onChange={onChange} value={values.senderAccountName} error={errors.senderAccountName} />
                <Input inputStyle={{ color: "black" }} label="Sender Account Number" name="senderAccountNumber" onChange={onChange} value={values.senderAccountNumber} error={errors.senderAccountNumber} />
                <Input inputStyle={{ color: "black" }} label="Sender Bank Name" name="senderBankName" onChange={onChange} value={values.senderBankName} error={errors.senderBankName} />
                <Input inputStyle={{ color: "black" }} label="Date" name="date" onChange={onChange} value={values.date} error={errors.date} />
            </div>
            <Button2 submit={submit} loading={loading} title="Transfer" end style={{ width: 'fit-content', background: 'blue', paddingInline: '40px' }} />
        </ModalLayout>
    )
}
