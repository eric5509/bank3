'use client'
import { useEffect, useState } from "react";
import Input from "../global/Input";
import Title from "../global/Title";
import Select from "../global/Select";
import Button2 from "../global/Button2";
import { validate } from "../global/Validate";
import { debitLink, transactionsLink } from "@/lib/links";
import { useAppDispatch, useAppSelector } from "@/provider/store/hook";
import { closeModal } from "@/provider/slice/modal";
import ModalLayout from "./ModalLayout";
import { loadTransactions } from "@/provider/slice/transactions";
import axios from "axios";
import Success from "./Success";

type Props = {
    modal: string
}
export default function CreditModal({ modal }: Props) {
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const dispatch = useAppDispatch()

    const [values, setValues] = useState({
        accountNumber: '',
        status: '',
        amount: '',
        description: '',
        date: ''
    })
    const [errors, setErrors] = useState({
        accountNumber: '',
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

    const options = useAppSelector(store => store.account.options)
    const fetchData = async () => {
        const response = await axios.get(transactionsLink);
        dispatch(loadTransactions(response.data.data))
    }

    const submit = async () => {
        const isValid = validate(values)
        if (!isValid.valid) return setErrors({ ...errors, ...isValid.errors })
        if (isNaN(Number(values.amount))) return setErrors({ ...errors, amount: 'Please input a valid amount' })
        try {
            setLoading(true)
            await axios.post(debitLink, values);
            await fetchData()
            setValues({ accountNumber: "", status: 'pending', amount: '', description: '', date: '' })
            setSuccess(true)
            setTimeout(() => { setSuccess(false); dispatch(closeModal()) }, 3000);
        } catch (error: any) {
            console.log(error.response.data.message)
            if (error.response.data.message === "Transaction failed due to insufficient funds") {
                setErrors({ ...errors, amount: error.response.data.message })
            }
            if (error.response.data.message === "Account does not exist") {
                setErrors({ ...errors, amount: error.response.data.message })
            }
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        setValues({ ...values, status: 'pending' })
    }, [options])

    return (
        <ModalLayout success={success} modal={modal}>
            <Success success={success} />
            <Title title="Debit Account" />
            <div className="grid gap-5 mt-10 mb-5 grid-cols-2">
                <Select options={options} style="text-black" label="Account Holder" name="accountNumber" onChange={onChange} value={values.accountNumber} error={errors.accountNumber} />
                <Select style="text-black" data={['pending', 'success']} label="Status" name="status" onChange={onChange} value={values.status} error={errors.status} />
                <Input inputStyle={{ color: "black" }} label="Amount" name="amount" onChange={onChange} value={values.amount} error={errors.amount} />
                <Input inputStyle={{ color: "black" }} label="Date" name="date" onChange={onChange} value={values.date} error={errors.date} />
            </div>
            <Input inputStyle={{ color: "black" }} label="Description" name="description" onChange={onChange} value={values.description} error={errors.description} />
            <div className="mt-7" onClick={submit}>
                <Button2 loading={loading} title="Debit" end style={{ width: 'fit-content', background: 'green', paddingInline: '40px' }} />
            </div>
        </ModalLayout>
    )
}