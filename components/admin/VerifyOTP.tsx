"use client";
import { useEffect, useState } from "react";
import Button from "../global/Button";
import Input from "../global/Input";
import { validate } from "../global/Validate";
import { useCookies } from "react-cookie";

import {
  ProcessOTPValidation,
  ProcessPINValidation,
  SendLoginOTP,
} from "@/lib/Post";
import { useRouter, useSearchParams } from "next/navigation";
import Button2 from "../global/Button2";
import AuthFooter from "../AccountAdmin/AuthFooter";

export type TAuthLogin = {
  data: {
    fullName: string;
    email: string;
    accountNumber: string;
  };
};

export default function VerifyOTP({ data }: TAuthLogin) {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [values, setValues] = useState({
    otp: "",
  });
  const [errors, setErrors] = useState({
    otp: "",
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
    const result = await ProcessOTPValidation({
      email: data.email,
      otp: values.otp,
    });
    if (!result.success) {
      setErrors({ otp: result.message });
      return setLoading(false);
    }
    setLoading(false);
    await SendLoginOTP({
      otp: result.data,
      firstName: data.fullName.split(" ")[0],
    });
    setCookie('token', result.data)
    router.push("/admin");
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
          <p className="text-13 mb-5 mt-2 text-center">Verify OTP!</p>
          <p className="text-lg font-semibold capitalize text-center">
            An OTP was sent to your Email
          </p>
          <div className="space-y-6 mt-7">
            <div className=" relative">
              <Input
                label="OTP"
                inputStyle={{ borderRadius: "5px" }}
                name="otp"
                onChange={onChange}
                border
                value={values.otp}
                labelStyle={{
                  color: "black",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
                error={errors.otp}
              />
            </div>
            <div onClick={submit} className="">
              <Button2
                title="Login"
                loading={loading}
                style={{
                  paddingInline: "40px",
                  width: "100%",
                  borderRadius: "8px",
                  display: "grid",
                  placeContent: "center",
                  background: "rgb(220 38 38)",
                  height: '55px'
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
