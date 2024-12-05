"use client";
import { useState } from "react";
import Button2 from "../global/Button2";
import Input from "../global/Input";

export default function BaseUpdate() {
  const [accountInfo, setAccountInfo] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    phone: "",
    email: "",
    dob: "",
    country: "",
    state: "",
    street: "",
    city: "",
    zip: "",
    currency: "",
    occupation: "",
    maritalStatus: "",
    accountType: "",
    currentBalance: "",
    availableBalance: "",
    cot: "",
    ssn: "",
    imfNumber: "",
    pin: "",
    password: "",
  });

  const onChange = (event: any) => {
    const { name, value } = event.target;
    setAccountInfo({
      ...accountInfo,
      [name]: value,
    });
  };
  return (
    <div className="w-full">
      <div className="grid w-full grid-cols-4 gap-3">
        <Input
          label="Firstname"
          name="firstname"
          onChange={onChange}
          value=""
          error=""
        />
        <Input
          label="Firstname"
          name="firstname"
          onChange={onChange}
          value=""
          error=""
        />
        <Input
          label="Firstname"
          name="firstname"
          onChange={onChange}
          value=""
          error=""
        />
        <Input
          label="Firstname"
          name="firstname"
          onChange={onChange}
          value=""
          error=""
        />
        <Input
          label="Firstname"
          name="firstname"
          onChange={onChange}
          value=""
          error=""
        />
        <Input
          label="Firstname"
          name="firstname"
          onChange={onChange}
          value=""
          error=""
        />
        <Input
          label="Firstname"
          name="firstname"
          onChange={onChange}
          value=""
          error=""
        />
        <Input
          label="Firstname"
          name="firstname"
          onChange={onChange}
          value=""
          error=""
        />
        <Input
          label="Firstname"
          name="firstname"
          onChange={onChange}
          value=""
          error=""
        />
        <Input
          label="Firstname"
          name="firstname"
          onChange={onChange}
          value=""
          error=""
        />
        <Input
          label="Firstname"
          name="firstname"
          onChange={onChange}
          value=""
          error=""
        />
        <Input
          label="Firstname"
          name="firstname"
          onChange={onChange}
          value=""
          error=""
        />
        <Input
          label="Firstname"
          name="firstname"
          onChange={onChange}
          value=""
          error=""
        />
        <Input
          label="Firstname"
          name="firstname"
          onChange={onChange}
          value=""
          error=""
        />
        <Input
          label="Firstname"
          name="firstname"
          onChange={onChange}
          value=""
          error=""
        />
        <Input
          label="Firstname"
          name="firstname"
          onChange={onChange}
          value=""
          error=""
        />
        <Input
          label="Firstname"
          name="firstname"
          onChange={onChange}
          value=""
          error=""
        />
        <Input
          label="Firstname"
          name="firstname"
          onChange={onChange}
          value=""
          error=""
        />
        <Input
          label="Firstname"
          name="firstname"
          onChange={onChange}
          value=""
          error=""
        />
        <Input
          label="Firstname"
          name="firstname"
          onChange={onChange}
          value=""
          error=""
        />
        <Input
          label="Firstname"
          name="firstname"
          onChange={onChange}
          value=""
          error=""
        />
        <Input
          label="Firstname"
          name="firstname"
          onChange={onChange}
          value=""
          error=""
        />
      </div>
      <div className="flex justify-end w-full">
        <Button2 title="Update" style={{ width: "300px", height: "55px" }} />
      </div>
    </div>
  );
}
