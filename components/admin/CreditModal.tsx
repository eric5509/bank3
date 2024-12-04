"use client";
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
import { TransactionInputInitialValues } from "./data";
import { CreditAccount } from "@/lib/Post";
import { fetchAllTransactions } from "@/lib/Get";
import { loadAccounts } from "@/provider/slice/account";

type Props = {
  modal: string;
};
export default function CreditModal({ modal }: Props) {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const [values, setValues] = useState(TransactionInputInitialValues);

  const [errors, setErrors] = useState(TransactionInputInitialValues);
  const onChange = (event: any) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const options = useAppSelector((store) => store.account.options);
  
  const submit = async () => {
    const isValid = validate(values);
    if (!isValid.valid) return setErrors({ ...errors, ...isValid.errors });
    if (isNaN(Number(values.amount)))
      return setErrors({ ...errors, amount: "Please input a valid amount" });
    setLoading(true);
    const result = await CreditAccount(values);
    if (!result.success) {
      setLoading(false);
      return;
    }
    const allTransactions = await fetchAllTransactions();
    if (allTransactions.success) {
      dispatch(loadTransactions(allTransactions.data));
      setSuccess(true);
      setValues(TransactionInputInitialValues);
      setLoading(false);
      return setTimeout(() => {
        setSuccess(false);
        dispatch(closeModal());
      }, 3500);
    }
    return setLoading(false);
  };
  

  return (
    <ModalLayout success={success} modal={modal}>
      <Success success={success} />
      <div className="flex justify-between items-center">
        <Title title="Credit Account" />
        <p className="font-semibold text-lg">
          {values.accountNumber !== "" ? values.accountNumber : ""}
        </p>
      </div>
      <div className="grid gap-5 mt-10 mb-5 grid-cols-2">
        <Select
          options={options}
          style="text-black"
          label="Account Holder"
          name="accountNumber"
          onChange={onChange}
          value={values.accountNumber}
          error={errors.accountNumber}
        />
        <Select
          style="text-black"
          data={['',"pending", "success"]}
          label="Status"
          name="status"
          onChange={onChange}
          value={values.status}
          error={errors.status}
        />
        <Input
          inputStyle={{ color: "black" }}
          label="Amount"
          name="amount"
          onChange={onChange}
          value={values.amount}
          error={errors.amount}
        />
        <Input
          inputStyle={{ color: "black" }}
          label="Date"
          name="date"
          onChange={onChange}
          value={values.date}
          error={errors.date}
        />
      </div>
      <Input
        inputStyle={{ color: "black" }}
        label="Description"
        name="description"
        onChange={onChange}
        value={values.description}
        error={errors.description}
      />
      <div className="mt-7" onClick={submit}>
        <Button2
          loading={loading}
          title="Credit"
          end
          style={{
            width: "fit-content",
            background: "green",
            paddingInline: "40px",
          }}
        />
      </div>
    </ModalLayout>
  );
}
