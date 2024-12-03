'use client'
import { useEffect, useState } from "react";
import Input from "../global/Input";
import Title from "../global/Title";
import Select from "../global/Select";
import Button2 from "../global/Button2";
import { validate } from "../global/Validate";
import { creditLink, transactionsLink } from "@/lib/links";
import { useAppDispatch, useAppSelector } from "@/provider/store/hook";
import { closeModal } from "@/provider/slice/modal";
import ModalLayout from "./ModalLayout";
import { loadTransactions } from "@/provider/slice/transactions";
import axios from "axios";
import Success from "./Success";
import { LoanInputInitialValues } from "./data";
import { fetchAllLoans } from "@/lib/Get";
import { loadLoanAccounts } from "@/provider/slice/loan";
import { InitializeLoanApplication } from "@/lib/Post";

type Props = {
  modal: string
}
export default function LoanModal({ modal }: Props) {
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const dispatch = useAppDispatch()
  const [values, setValues] = useState(LoanInputInitialValues)
  const [errors, setErrors] = useState(LoanInputInitialValues)
  const onChange = (event: any) => {
    const { name, value } = event.target
    setValues({ ...values, [name]: value })
    setErrors({ ...errors, [name]: "" })
  }
  const options = useAppSelector(store => store.account.options)
  const fetchData = async () => {
    const response = await fetchAllLoans();
    dispatch(loadLoanAccounts(response.data))
  }
  const submit = async () => {
    const isValid = validate(values)
    if (!isValid.valid) return setErrors({ ...errors, ...isValid.errors })
    if (isNaN(Number(values.amount))) return setErrors({ ...errors, amount: 'Please input a valid amount' })
    setLoading(true)
    const result = await InitializeLoanApplication(values);
    if (result.success) {
      await fetchData()
      setSuccess(true)
      setValues(LoanInputInitialValues)
      setTimeout(() => { setSuccess(false); dispatch(closeModal()) }, 3500);
    }
  }
  useEffect(() => {
    setValues({ ...values, status: 'pending' })
  }, [options])

  return (
    <ModalLayout success={success} modal={modal}>
      <Success success={success} />
      <div className="flex justify-between items-center">
        <Title title="Credit Account" />
        <p className="font-semibold text-lg">{values.accountNumber !== "" ? values.accountNumber : ''}</p>
      </div>
      <div className="grid gap-5 mt-10 mb-5 grid-cols-2">
        <Select options={options} style="text-black" label="Account Holder" name="accountNumber" onChange={onChange} value={values.accountNumber} error={errors.accountNumber} />
        <Select style="text-black" data={['pending', 'success']} label="Status" name="status" onChange={onChange} value={values.status} error={errors.status} />
        <Input inputStyle={{ color: "black" }} label="Amount" name="amount" onChange={onChange} value={values.amount} error={errors.amount} />
        <Input inputStyle={{ color: "black" }} label="Date" name="date" onChange={onChange} value={values.date} error={errors.date} />
      </div>
      <Input inputStyle={{ color: "black" }} label="Reason" name="reason" onChange={onChange} value={values.reason} error={errors.reason} />
      <div className="mt-7" onClick={submit}>
        <Button2 loading={loading} title="Credit" end style={{ width: 'fit-content', background: 'green', paddingInline: '40px' }} />
      </div>
    </ModalLayout>
  )
}
