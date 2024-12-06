"use client";
import { useEffect, useState } from "react";
import Button2 from "../global/Button2";
import Input from "../global/Input";
import { valuesData } from "./data";
import { TAccount } from "../global/type";
import Select from "../global/Select";

type Props = {
  data: TAccount;
};

export default function BaseUpdate({ data }: Props) {
  const [values, setValues] = useState(valuesData);
  const [errors, setErrors] = useState(valuesData);


  const onChange = (event: any) => {
    const { name, value } = event.target;
    setValues({...values, [name]: value})
    setErrors({...errors, [name]: ''})
  };

  useEffect(() => {
    setValues(data);
  }, []);
  return (
    <div className="w-full">
      <div className="grid w-full grid-cols-4 gap-3">
        <Input
          label="First Name"
          name="firstName"
          onChange={onChange}
          value={values.firstName}
          error={errors.firstName}
        />
        <Input
          label="Last Name"
          name="lastName"
          onChange={onChange}
          value={values.lastName}
          error={errors.lastName}
        />
        <Input
          label="Middle Name"
          name="middleName"
          onChange={onChange}
          value={values.middleName}
          error={errors.middleName}
        />
        <Input
          label="Phone"
          name="phone"
          onChange={onChange}
          value={values.phone}
          error={errors.phone}
        />
        <Input
          label="Email"
          name="email"
          onChange={onChange}
          value={values.email}
          error={errors.email}
        />
        <Input
          label="Occupation"
          name="occupation"
          onChange={onChange}
          value={values.occupation}
          error={errors.occupation}
        />
        <Select
          label="Gender"
          name="gender"
          data={["male", "female", "other"]}
          onChange={onChange}
          value={values.gender}
          error={errors.gender}
        />
        <Input
          label="State"
          name="state"
          onChange={onChange}
          value={values.state}
          error={errors.state}
        />
        <Input
          label="Street"
          name="street"
          onChange={onChange}
          value={values.street}
          error={errors.street}
        />
        <Input
          label="Date of Birth"
          name="dob"
          onChange={onChange}
          value={values.dob}
          error={errors.dob}
        />
        <Input
          label="IMF Code"
          name="imf"
          onChange={onChange}
          value={values.imf}
          error={errors.imf}
        />
        <Input
          label="COT Code"
          name="cot"
          onChange={onChange}
          value={values.cot}
          error={errors.cot}
        />
        <Input
          label="Current Balance"
          name="currentBalance"
          onChange={onChange}
          value={values.currentBalance}
          error={errors.currentBalance}
        />
        <Input
          label="Available Balance"
          name="availableBalance"
          onChange={onChange}
          value={values.availableBalance}
          error={errors.availableBalance}
        />
        <Select
          label="Marital Status"
          name="maritalStatus"
          data={["single", "married", "divorced", "widowed"]}
          onChange={onChange}
          value={values.maritalStatus}
          error={errors.maritalStatus}
        />
        <Input
          label="Country"
          name="country"
          onChange={onChange}
          value={values.country}
          error={errors.country}
        />
        <Input
          label="Account Number"
          name="accountNumber"
          onChange={onChange}
          value={values.accountNumber}
          error={errors.accountNumber}
        />
        <Input
          label="Routing Number"
          name="routingNumber"
          onChange={onChange}
          value={values.routingNumber}
          error={errors.routingNumber}
        />
        <Select
          label="Account Type"
          name="accountType"
          data={["checking", "savings", "business"]}
          onChange={onChange}
          value={values.accountType}
          error={errors.accountType}
        />
        <Select
          label="Status"
          name="status"
          data={["success", "on-hold", "pending", "blocked"]}
          onChange={onChange}
          value={values.status}
          error={errors.status}
        />
        <Select
          label="Active"
          name="active"
          onChange={onChange}
          value={values.active}
          error={errors.active}
        />
        <Input
          label="Currency"
          name="currency"
          onChange={onChange}
          value={values.currency}
          error={errors.currency}
        />
      </div>

      <div className="flex justify-end w-full">
        <Button2 title="Update" style={{ width: "300px", height: "55px" }} />
      </div>
    </div>
  );
}
