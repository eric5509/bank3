'use client'
import { transactionsLink, updateTransactionLink, updateUserLink } from "@/lib/links";
import { filterAccount } from "@/provider/slice/account";
import { closeModal } from "@/provider/slice/modal";
import { loadTransactions } from "@/provider/slice/transactions";
import { useAppDispatch, useAppSelector } from "@/provider/store/hook";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";

type Props = {
    account?: boolean
    id?: string
    Active?: string
}

export default function UpdateActiveButton({ account, id, Active }: Props) {
    const storeData = useAppSelector(store => store.transaction.transaction)
    const storeData2 = useAppSelector(store => store.modal.value)
    const status = ['', 'active', 'inactive'];
    const [active, setActive] = useState(0)
    // const index = status.findIndex((el) => el === storeData.active);
    useEffect(() => {
        // setActive(index)
    },[storeData2])
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<any>(null);

    useEffect(() => {
        if (typeof window !== undefined) {
            const handleClickOutside = (e: MouseEvent) => {
                if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                    setOpen(false);
                }
            };
            window.addEventListener('click', handleClickOutside);
            return () => {
                window.removeEventListener('click', handleClickOutside);
            };
        }
    }, []);

    const handleParentClick = () => {
        setOpen(prev => !prev);
    };

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (account) {
            dispatch(filterAccount(status[active]))
        }
        console.log(status[active])
    }, [active])

    const handleOptionClick = async (key: number) => {
        setActive(key);
        setOpen(false);
        try {
            const response = await axios.patch(`${updateUserLink}/${id}`, { status: status[key] });
            if (response.statusText === 'OK') {
                const response = await axios.get(transactionsLink);
                dispatch(loadTransactions(response.data.data))
                dispatch(closeModal())
            }
        } catch (error: any) {
            console.error('Error updating data:', error.response?.data || error.message);
        }
    };


    return (
        <div
            ref={dropdownRef}
            className={`w-32 cursor-pointer duration-300  relative h-12 border-2 border-white items-center rounded-full shadow-md flex justify-center gap-3 
                ${active === 1 && "bg-amber-500"}
                ${active === 2 && "bg-green-500"}
                ${active === 3 && "bg-red-500"}
            `}
            onClick={handleParentClick}
        >
            <p className="text-sm capitalize text-white font-medium">
                {status[active]}{" "}
                <TiArrowSortedDown
                    className={`duration-300 ${open ? "rotate-180" : "rotate-0"
                        } inline`}
                />
            </p>
            <div
                className={`w-36 border-2 bg-[#070740] shadow-md duration-500 rounded-lg border-gray-800 overflow-hidden ${open ? "opacity-100 visible" : "opacity-0 invisible"
                    } text-sm top-14 left-1/2 -translate-x-1/2 absolute`}
            >
                {status.map((el, key) => (
                    <p
                        key={key}
                        onClick={(e) => {
                            e.stopPropagation();
                            handleOptionClick(key);
                        }}
                        className={`px-4 hover:font-medium text-white py-3 hover:bg-black text-sm text-center duration-300 
                            ${key === 1 && "hover:text-amber-500"} 
                            ${key === 2 && "hover:text-green-500"} 
                            ${key === 3 && "hover:text-red-500"}
                             capitalize cursor-pointer`
                        }
                    >
                        {el}
                    </p>
                ))}
            </div>
        </div>
    );
}
