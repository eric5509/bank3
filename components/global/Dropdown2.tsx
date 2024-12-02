'use client'
import { editAccount, filterAccount } from "@/provider/slice/account";
import { useAppDispatch } from "@/provider/store/hook";
import { useEffect, useRef, useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";

type Props = {
    account?: boolean
    updateActive?: boolean
    id?: string

}

export default function Dropdown2({ account, updateActive, id }: Props) {
    const status = account ? ['all', 'inactive', 'active'] : ['inactive', 'active'];
    const [active, setActive] = useState(0);
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<any>(null);
    const dispatch = useAppDispatch()

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

    const handleOptionClick = (key: number) => {
        setActive(key);
        setOpen(false);
       
    };

    useEffect(() => {
        if (account) {
            dispatch(filterAccount(status[active]))
        }

        console.log(filterAccount(status[active]), id)
    }, [active])


    return (
        <div
            ref={dropdownRef}
            className={`w-32 cursor-pointer duration-300  relative h-12 border-2 border-white items-center rounded-full shadow-md flex justify-center gap-3 
                ${active === 0 && "bg-red-500"}
                ${active === 1 && "bg-green-500"}
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
                            ${key === 0 && "hover:text-red-500"} 
                            ${key === 1 && "hover:text-green-500"} 
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
