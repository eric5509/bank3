'use client'
import { optionsLink } from "@/lib/links";
import { loadOptions } from "@/provider/slice/account";
import { useAppDispatch, useAppSelector } from "@/provider/store/hook";
import { useEffect, useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";

type Props = {
    value: string;
    label?: string;
    error?: string;
    name: string;
    style?: string;
    data?: string[]
    options?:
    {
        value: string
        label: string
    }[]
    onChange: (e: any) => void;
};


export default function UserOptions({ value, label, name, error, data, onChange, style }: Props) {
    const [loading, setLoading] = useState(false)
    const options = useAppSelector(store => store.account.options)
    const dispatch = useAppDispatch()
    const fetchOptions = async () => {
        try {
            setLoading(true)
            const options = await fetch(optionsLink)
            const response2 = await options.json()
            const Options = await response2
            dispatch(loadOptions(Options))
            return Options
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchOptions()
    }, [])
    return (
        <div className="">
            <p className="text-white mb-1 text-[15px] ">{label}</p>
            <div className="h-12 relative">
                <select name={name} value={value} onChange={onChange} className={`h-full cursor-pointer appearance-none pl-2 rounded-lg text-[15px] capitalize ${style} relative outline-none w-full border-2 ${error ? "border-red-500" : "border-gray-300"} duration-300`}>
                    {options?.map((el, key) => (
                        <option key={key} value={el.value} className="capitalize">{el.label}</option>
                    ))}
                </select>
                <TiArrowSortedDown className="absolute right-2 text-black top-1/2 -translate-y-1/2 pointer-events-none cursor-pointer" />
            </div>
            <p className={`${error ? 'h-5 opacity-100' : 'h-0 opacity-0'} overflow-hidden duration-300 text-red-500`}>{error}</p>
        </div>
    )
}
