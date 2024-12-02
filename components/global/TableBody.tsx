'use client'
import { setAccount } from "@/provider/slice/account"
import { openModal } from "@/provider/slice/modal"
import { TAccount, TAccount2, TTransaction } from "@/provider/slice/type"
import { useAppDispatch } from "@/provider/store/hook"
import React from "react"
type Props = {
    sn?: number
    length?: number
    data: any[]
    mainData?: any[]
    type: string
}

export default function TableBody({ sn, length,mainData, type, data }: Props) {
    const style = 'p-3 text-sm'
    const dispatch = useAppDispatch()



    const func = (data: TAccount, key: number) => {
        if (type === 'account') {
            dispatch(setAccount(mainData![key]))
        }
        dispatch(openModal('account'))
    }

    return (
        <>
            {data.map((el, key) => (
                <tr
                    onClick={() => func(el, key)}

                    key={key}
                    className={`${key !== data.length - 1 && "border-b-2 border-gray-900"} 
                        after:rounded-md group duration-500 cursor-pointer relative overflow-hidden after:absolute after:w-0 after:h-full 
                        ${el.status === "pending" && "after:from-[yellow] after:to-black"}
                        ${el.status === "success" && "after:from-[green] after:to-black"}
                        ${el.status === "failed" && "after:from-[red] after:to-black"}
                        ${el.status === "blocked" && "after:from-[red] after:to-black"}
                        ${el.status === "on-hold" && "after:from-[gray] after:to-black"}
                        after:top-0 ${key % 2 === 0
                            ? "after:left-0 after:bg-gradient-to-tl"
                            : "after:right-0 after:bg-gradient-to-tr"
                        } hover:after:w-full after:duration-500 after:z-[-1] z-30`}
                >
                    {Object.entries(el).map((entry, key2) => (
                        <React.Fragment key={key2}>
                            {entry[0] === "fullName" || entry[0] === "accountHolder" ? (
                                <td key={key2} className={`${style} flex items-center gap-3`}>
                                    <span className="h-11 w-11 shrink-0 border-2 rounded-full"></span>
                                    <span className="font- capitalize">{entry[1] as string}</span>
                                </td>
                            ) : entry[0] === "image" ? (
                                <td key={key2} className={`${style} flex items-center gap-2`}>
                                    <span className="h-28 w-48 shrink-0 border-2 rounded-lg"></span>
                                </td>
                            ) : entry[0] === "amountt" ? (
                                <td key={key2} className={`${style}`}>
                                    <span className={``}>{entry[1] as string}</span>
                                </td>
                            ) : (
                                <td
                                    key={key2}
                                    className={`${style} 
                                        ${entry[0] === "accountHolder" && "font-semibold"}
                                        ${(entry[0] === "status" || entry[0] === "active") && "capitalize"}
                                        ${entry[1] === "pending" &&
                                        "text-amber-500 group-hover:text-white duration-300"
                                        }
                                        ${entry[1] === "failed" &&
                                        "text-red-500 group-hover:text-white duration-300"
                                        }
                                        ${entry[1] === "success" &&
                                        "text-green-500 group-hover:text-white duration-300"
                                        } 
                                    `}
                                >
                                    {entry[1] === true && "Active"}
                                    {entry[1] === false && "Inactive"}
                                    {entry[1] !== true && entry[1] !== false && (entry[1] as string)}
                                </td>
                            )}
                        </React.Fragment>
                    ))}
                </tr>
            ))}
        </>
    );
}
