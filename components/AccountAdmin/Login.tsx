'use client'
import { useState } from "react";
import Button from "../global/Button";
import Input from "../global/Input";
import { validate } from "../global/Validate";
import { loginLink } from "@/lib/links";

export default function Login() {
    const [values, setValues] = useState({
        value: "",
        password: "",
    })
    const [errors, setErrors] = useState({
        value: "",
        password: "",
    })

    const onChange = (e: any) => {
        const { value, name } = e.target
        setValues({ ...values, [name]: value })
        setErrors({ ...errors, [name]: "" })
    }

    const submit = async () => {
        const isValid = validate(values)
        setErrors(isValid.errors)
        const response = await fetch(loginLink, {
            method: "POST",
            body: JSON.stringify({values})
        })
        console.log(response)

    }


    return (
        <div className='h-screen grid place-content-center w-full text-black pt-10'>
            <img src="https://images.pexels.com/photos/19469036/pexels-photo-19469036/free-photo-of-krang-shuri-waterfalls-krang-suri-rd-umlarem-meghalaya-india-most-beautiful-falls-in-meghalaya.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full h-full object-cover absolute top-0 left-0 z-0" alt="" />
            <div className="w-full h-full object-cover absolute top-0 left-0 bg-white/40 z-10" ></div>
            <div className="w-[450px] p-7 border-2 backdrop-blur-sm relative z-30 text-black shadow-md shadow-gray-800 bg-black/30 rounded-md mx-auto">
                <p className="text-2xl font-semibold mb-7">Welcome Back!</p>
                <div className="space-y-6">
                    <div className="">
                        <Input label="Email or Phone" name="value" onChange={onChange} value={values.value} error={errors.value} />
                    </div>
                    <div className="">
                        <Input label="Password" name="password" onChange={onChange} value={values.password} error={errors.password} />
                    </div>
                    <p className="text-end font-semibold text-sm text-gray-300">Forgot Password?</p>
                    <div onClick={submit} className="">
                        <Button title="Login" style={{ paddingInline: '40px' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}
