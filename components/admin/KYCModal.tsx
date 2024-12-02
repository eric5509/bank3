"use client";
import { Calendar, Mail, PhoneCall } from "lucide-react";
import Link from "next/link";
import ModalLabelValue from "../global/ModalLabelValue";
import PenButton from "../global/PenButton";
import Dropdown from "../global/Dropdown";
import Delete from "../global/Delete";

export default function KYCModal() {
    const opened = true;
    const fullname = `Anne Mayers Jones`

    const updateStatus = async (value: string) => {

    };

    return (
        <div className={`grid ${opened ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} origin-top-right w-[750px] duration-500`}>
            <div className={`border-2 text-white  w-full duration-500 bg-black/40 p-5 rounded-2xl shadow-lg shadow-black/20`}>
                <div className="flex items-center gap-4">
                    <div className="w-full">
                        <div className="flex items-center justify-between">
                            <div className="flex gap-5 items-center">
                                <img alt="" className="h-24 w-24 rounded-full border-2" src="a" />
                                <Link href={"/accounts/5"} className="text-2xl duration-300 hover:text-blue-500 hover:underline font-semibold">
                                    Anne Mayers Paige
                                </Link>
                            </div>
                            <div className="flex items-center gap-7">
                                <Dropdown />
                                <Delete />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-7">
                    <div className="grid mb-5 text-[15px] grid-cols-3 gap-5">
                        <ModalLabelValue label="Account Holder" value={`Anne Mayers Jones`} labelStyle="text-gray-300" />
                        <ModalLabelValue label="Account Number" value={'2312121322'} labelStyle="text-gray-300" />
                        <ModalLabelValue label="Document Type" uppercase value={'Drivers License'} labelStyle="text-gray-300" />
                    </div>
                    <div className="flex justify-center">
                        <div className="h-52 w-80 border-2 rounded-xl shadow-md my-3"></div>
                    </div>
                    <div className="flex justify-end">
                        <PenButton />
                    </div>
                </div>
            </div>
        </div>
    );
}
