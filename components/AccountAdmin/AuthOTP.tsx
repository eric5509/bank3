"use client";
import { useEffect, useState } from "react";
import Button from "../global/Button";
import Input from "../global/Input";
import { validate } from "../global/Validate";
import { ProcessPINValidation } from "@/lib/Post";
import { useRouter, useSearchParams } from "next/navigation";
import AuthFooter from "./AuthFooter";

export default function AuthOTP() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  const [values, setValues] = useState({
    authPin: "",
    accountNumber,
  });
  const [errors, setErrors] = useState({
    authPin: "",
  });

  const onChange = (e: any) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const submit = async () => {
    const isValid = validate(values);
    if (!isValid.valid) return setErrors({ ...errors, ...isValid.errors });
    setLoading(true);
    const result = await ProcessPINValidation(values);
    if (!result.success) {
      setErrors({ ...errors, authPin: result.message });
      return setLoading(false);
    }

    setLoading(false);
  };

  useEffect(() => {
    const storedFullName = localStorage.getItem("fullName");
    const storedAccountNumber = localStorage.getItem("accountNumber");
    if (!storedFullName || !storedAccountNumber) {
      router.push("/");
    } else {
      setFullName(storedFullName);
      setAccountNumber(storedAccountNumber);
      setValues({ ...values, accountNumber: storedAccountNumber });
    }
  }, [router]);

  return (
    <div className="h-screen flex flex-col justify-between gap-10 items-center w-full bg-white pt-5">
      <div className="w-[475px]">
        <div className="flex items-center mb-7 justify-center">
          <img
            src="https://firstunionb.com/dashboard/admin/logo/fUB%20black.png"
            className="h-16"
            alt=""
          />
        </div>
        <div className="w-full p-7 border relative z-30 text-black border-gray-300  rounded-2xl mx-auto">
          <p className="text-13 mb-5 mt-2 text-center">Welcome Back!</p>
          <p className="text-2xl font-semibold capitalize text-center">
            {fullName}
          </p>
          <div className="space-y-6 mt-7">
            <div className=" relative">
              <Input
                label="AUTHENTICATION PIN"
                inputStyle={{ borderRadius: "5px" }}
                name="authPin"
                onChange={onChange}
                border
                password
                value={values.authPin}
                labelStyle={{ color: "black", fontSize: "13.5px" }}
                error={errors.authPin}
              />
            </div>
            <div onClick={submit} className="">
              <Button
                title="Login"
                style={{
                  paddingInline: "40px",
                  width: "100%",
                  borderRadius: "10px",
                  display: "grid",
                  placeContent: "center",
                  background: "rgb(220 38 38)",
                  paddingBlock: "15px",
                }}
              />
            </div>
            <div onClick={submit} className="">
              <Button
                title="Back To Homepage"
                style={{
                  paddingInline: "40px",
                  width: "100%",
                  borderRadius: "10px",
                  display: "grid",
                  placeContent: "center",
                  background: "blue",
                  paddingBlock: "15px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <AuthFooter />
    </div>
  );
}
