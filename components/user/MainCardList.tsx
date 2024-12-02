'use client'
import { motion } from 'framer-motion'
import MainCard from "./MainCard";
import { MdAccountBalance } from "react-icons/md";
import { GiExpense } from "react-icons/gi";
import { TbMoneybag } from "react-icons/tb";

export default function MainCardList() {
    const data = [
        {
            icon: <MdAccountBalance size="22px" />,
            label: 'Balance',
            value: '$14,500.15'
        },

        {
            icon: <GiExpense size="22px" />,
            label: 'Expenses',
            value: '$8,444.23'
        },
        {
            icon: <TbMoneybag size="22px" />,
            label: 'Loan',
            value: '$1000.05'
        },

    ]
    return (
        <div className="grid gap-4 grid-cols-4">
            {data.map((el, key) => (
                <MainCard data={el} track={key} key={key} />
            ))}
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: data.length * 0.1 }} className="h-full shad bg-[#007BFF] hover:bg-[#0056D2] grid cursor-pointer active:scale-95 place-content-center  rounded-lg shadow-md duration-300">
                <p className="text-xl text-white font-semibold">Send Money</p>
            </motion.div>
        </div >
    )
}
