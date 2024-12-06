"use client";
import { useEffect, useState } from "react";
import Button from "../global/Button";
import Input from "../global/Input";
import { validate } from "../global/Validate";
import { ProcessPINValidation, SendLoginOTP } from "@/lib/Post";
import { useRouter, useSearchParams } from "next/navigation";
import AuthFooter from "./AuthFooter";
import { useCookies } from "react-cookie";
import Button2 from "../global/Button2";

export type TAuthLogin = {
  data: {
    fullName: string;
    email: string;
    accountNumber: string;
  }
}

export default function VerifyPin({ data }: TAuthLogin ) {
  const router = useRouter();
  console.log(data, 'Data')
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const [values, setValues] = useState({
    authPin: "",
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
    const result = await ProcessPINValidation({...values, accountNumber: data.accountNumber});
    if (!result.success) {
      setErrors({ ...errors, authPin: result.message });
      return setLoading(false);
    }
    setLoading(false);
    await SendLoginOTP({otp: result.data, firstName: data.fullName.split(' ')[0]})
    router.push("/auth/verify-otp");
  };

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
            {data.fullName}
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
              <Button2
                loading={loading}
                title="Login"
                style={{
                  paddingInline: "40px",
                  width: "100%",
                  borderRadius: "8px",
                  display: "grid",
                  placeContent: "center",
                  background: "rgb(220 38 38)",
                  height: "57px",
                }}
              />
            </div>
            <div onClick={submit} className="">
              <Button2
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
