'use client'

import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

type Props = {
  value: string;
  label: string;
  error?: string;
  labelStyle?: React.CSSProperties;
  name: string;
  inputStyle?: React.CSSProperties;
  password?: boolean
  number?: boolean
  hideInputIcon?: boolean
  border?: boolean
  onChange: (e: any) => void;
};

export default function Input({ value, label, name, labelStyle, password, border, hideInputIcon, error, number, onChange, inputStyle }: Props) {
  const [isPassword, setisPassword] = useState(true);
  const togglePasswordVisibility = () => {
    setisPassword(!isPassword);
  };
  return (
    <div className="">
      <p style={labelStyle} className="text-white mb-1 text-[15px] ">{label}</p>
      <div className="h-12 relative">
        <input style={inputStyle} type={password ? isPassword ? 'password': 'text' : number ? 'number' : 'text'} name={name} value={value} onChange={onChange} className={`h-full text-[15px]  pl-3 outline-none w-full appearance-none rounded-lg ${border ? 'border' : 'border-2'} ${error ? "border-red-500" : "border-gray-300"} duration-300`} />
        {hideInputIcon && <div className="bg-white absolute top-1 bottom-1 right-0.5 w-10"></div>}
        {password && <>
          {isPassword ? (
            <BsEye
            onClick={togglePasswordVisibility}
              className="absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer text-lg right-3 "
            />
          ) : (
            <BsEyeSlash
            onClick={togglePasswordVisibility}
              className="absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer text-lg right-3 "
            />
          )}
        </>
        }
      </div>
      <div className={`grid ${error ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'} text-sm mt-1 overflow-hidden duration-500 text-red-500`}>
        <p className="overflow-hidden duration-500">{error}</p>
      </div>
    </div>
  )
}
