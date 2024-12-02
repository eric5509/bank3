'use client'
import { useRef, useState } from "react";
import Input from "../global/Input";
import ModalLayout from "./ModalLayout";
import Title from "../global/Title";
import Select from "../global/Select";
import Button2 from "../global/Button2";
import { validate } from "../global/Validate";
import axios from "axios";
import { closeModal } from "@/provider/slice/modal";
import { useAppDispatch, useAppSelector } from "@/provider/store/hook";
import { allTransferLink, internalTransferLink } from "@/lib/links";
import Success from "./Success";
import { loadTransfers } from "@/provider/slice/transfer";

export default function TransferInternal() {
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const dispatch = useAppDispatch()
    const options = useAppSelector(store=> store.account.options)
    const [values, setValues] = useState({
        recipientAccountNumber: '',
        senderAccountNumber: '',
        status: '',
        amount: '',
        description: '',
        date: ''
    })
    const [errors, setErrors] = useState({
        recipientAccountNumber: '',
        senderAccountNumber: '',
        status: '',
        amount: '',
        description: '',
        date: ''
    })
    const onChange = (event: any) => {
        const { name, value } = event.target
        setValues({ ...values, [name]: value })
        setErrors({ ...errors, [name]: "" })
    }

    const fetchData = async () => {
        const request = await fetch(allTransferLink)
        const response = await request.json()
        const Transfers = response.data
        dispatch(loadTransfers(Transfers))
    }


    const submit = async () => {
        const isValid = validate(values)
        if (!isValid.valid) return setErrors({ ...errors, ...isValid.errors })
        if (isNaN(Number(values.amount))) return setErrors({ ...errors, amount: 'Please input a valid amount' })
        try {
            setLoading(true)
            const result = await axios.post(internalTransferLink, values);
            console.log(result)
            await fetchData()
            setSuccess(true)
            setValues({
                recipientAccountNumber: '',
                senderAccountNumber: '',
                status: '',
                amount: '',
                description: '',
                date: ''
            })
            setTimeout(() => { setSuccess(false); dispatch(closeModal()) }, 3000);

        } catch (error: any) {
            if (error.response.data.message === "Sender and Recipient cannot be the same") {
                setErrors({ ...errors, recipientAccountNumber: error.response.data.message })
            }
            if (error.response.data.message === "Insufficient funds") {
                setErrors({ ...errors, amount: error.response.data.message })
            }
        } finally {
            setLoading(false)
        }
    }


    return (
        <ModalLayout success={success} modal="internalTransfer">
            <Success success={success} />
            <div className="flex justify-between">
                <Title title="Internal Bank Transfer" />
            </div>
            <div className="grid gap-5 mt-10 mb-7 grid-cols-2">
                <Select style='text-black' options={options} label="Sender " name="senderAccountNumber" onChange={onChange} value={values.senderAccountNumber} error={errors.senderAccountNumber} />
                <Select style='text-black' options={options} label="Recipient " name="recipientAccountNumber" onChange={onChange} value={values.recipientAccountNumber} error={errors.recipientAccountNumber} />
                <Input inputStyle={{ color: "black" }} label="Amount" name="amount" onChange={onChange} value={values.amount} error={errors.amount} />
                <Select style="text-black" data={['', 'pending', 'success', 'failed']} label="Status" name="status" onChange={onChange} value={values.status} error={errors.status} />
                <Input inputStyle={{ color: "black" }} label="Description" name="description" onChange={onChange} value={values.description} error={errors.description} />
                <Input inputStyle={{ color: "black" }} label="Date" name="date" onChange={onChange} value={values.date} error={errors.date} />
            </div>
            <Button2 submit={submit} loading={loading} title="Transfer" end style={{ width: 'fit-content', background: 'blue', paddingInline: '40px' }} />
        </ModalLayout >
    )
}
