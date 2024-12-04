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

export default function Login() {
  const router = useRouter();

  const [values, setValues] = useState(LoginInputInitialValues);
  const [errors, setErrors] = useState(LoginInputInitialValues);
  const [isPassword, setisPassword] = useState(true);
  const togglePasswordVisibility = () => {
    setisPassword(!isPassword);
  };

  const onChange = (e: any) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const terms = ["Terms & Condition", "Privacy Policy", "Help"];

  const submit = async () => {
    const isValid = validate(values);
    if (!isValid.valid) return setErrors({ ...errors, ...isValid.errors });
    const result = await InitializeLogin(values);
    if (!result.success) {
      if (result.message.toLowerCase() == "invalid credentials") {
        setErrors({ ...errors, accountNumber: result.message });
      }
      return;
    }
    console.log(result.data);

    // return router.push("/");
  };

  return (
    <div className="h-screen flex flex-col justify-between items-center w-full bg-white pt-5">
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
          <p className="text-13 mb-5 mt-2">
            Access your banking panel using your account number and password.
          </p>
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
                password={isPassword}
                value={values.password}
                labelStyle={{ color: "black", fontSize: "13.5px" }}
                error={errors.password}
              />
              {isPassword ? (
                <BsEye
                  onClick={togglePasswordVisibility}
                  className="absolute bottom-5 cursor-pointer text-lg right-3 "
                />
              ) : (
                <BsEyeSlash
                  onClick={togglePasswordVisibility}
                  className="absolute bottom-5 cursor-pointer text-lg right-3 "
                />
              )}
            </div>
            <p className="text-end  text-15 text-red-600">Forgot Password?</p>
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
            <p className="text-sm text-center mt-5">
              New Customer?{" "}
              <span className="font-medium text-red-600 ml-0.5 cursor-pointer">
                Create an Account
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="h-24 bg-gray-50 font-light border-t w-full">
        <div className="flex h-full justify-between gap-10 text-13 items-center w-[1200px] mx-auto">
          <p >
            © 2024 All Rights Reserved First Union- Checking, Saving, Mortgage,
            Credit Cards, Loans.
          </p>
          <div className="flex gap-4 text-13 font-normal  text-red-600">
            {terms.map((el) => (
              <p className=" cursor-pointer">{el}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
