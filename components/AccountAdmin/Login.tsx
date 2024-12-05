"use client";
import { useState } from "react";
import Button from "../global/Button";
import Input from "../global/Input";
import { validate } from "../global/Validate";
import { loginLink } from "@/lib/links";
import { InitializeLogin } from "@/lib/Post";
import { useRouter } from "next/navigation";
import { LoginInputInitialValues } from "../admin/data";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import AuthFooter from "./AuthFooter";
import Button2 from "../global/Button2";
import { useCookies } from "react-cookie";

export default function Login() {
  const router = useRouter();
  const [values, setValues] = useState(LoginInputInitialValues);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(LoginInputInitialValues);
  const [serverError, setServerError] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const onChange = (e: any) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: "" });
    setServerError('')
  };

  const submit = async () => {
    const isValid = validate(values);
    if (!isValid.valid) return setErrors({ ...errors, ...isValid.errors });
    setLoading(true);
    const result = await InitializeLogin(values);
    if (!result.success) {
      setServerError(result.message);
      return setLoading(false);
    }
    setLoading(false);
    setCookie('user', result.data, {path: '/'})
    router.push(`/auth/verify-pin`);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between gap-10 items-center w-full bg-white pt-5">
      <div className="w-[475px]">
        <div className="flex items-center mb-7 justify-center">
          <img
            src="https://firstunionb.com/dashboard/admin/logo/fUB%20black.png"
            className="h-16"
            alt=""
          />
        </div>
        <div className="w-full p-7 border relative z-30 text-black border-gray-300  rounded-2xl mx-auto">
          <p className="text-2xl font-semibold ">Sign-in!</p>
          <p className="text-13 mb-7 mt-2">
            Access your banking panel using your account number and password.
          </p>
          <div
            className={`grid ${
              serverError
                ? "grid-rows-[1fr] opacity-100"
                : "opacity-0 grid-rows-[0fr]"
            } duration-500`}
          ></div>
          <div
            className={`grid overflow-hidden  border-[red] rounded bg-red-200 duration-300 ${
              serverError
                ? "grid-rows-[1fr] my-3 py-3 border-2"
                : "grid-rows-[0fr]"
            }`}
          >
            <p className="text-center overflow-hidden text-sm duration-500 text-[red] ">
              {serverError}
            </p>
          </div>
          <div className="space-y-6">
            <div className="relative">
              <Input
                label="Account Number"
                name="accountNumber"
                inputStyle={{ borderRadius: "5px" }}
                labelStyle={{ color: "black", fontSize: "13.5px" }}
                onChange={onChange}
                hideInputIcon
                border
                number
                value={values.accountNumber}
                error={errors.accountNumber}
              />
            </div>
            <div className=" relative">
              <Input
                label="Password"
                inputStyle={{ borderRadius: "5px" }}
                name="password"
                onChange={onChange}
                border
                password
                value={values.password}
                labelStyle={{ color: "black", fontSize: "13.5px" }}
                error={errors.password}
              />
            </div>
            <p className="text-end  text-15 text-red-600">Forgot Password?</p>
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
                  height: '57px'
                }}
              />
            </div>
            <p className="text-sm text-center mt-5">
              New Customer?{" "}
              <span className="font-medium text-red-600 ml-0.5 cursor-pointer">
                Create an Account
              </span>
            </p>
          </div>
        </div>
      </div>
      <AuthFooter />
    </div>
  );
}
