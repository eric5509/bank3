'use client'

import { openModal } from "@/provider/slice/modal"
import { useAppDispatch } from "@/provider/store/hook"
import { useRouter } from "next/navigation"

type Props = {
    icon?: any
    title: string
    style?: React.CSSProperties
    type?: string
    end?: boolean
    modal?: string
    link?: string
}

export default function Button({ icon, end, modal, title, style, type, link }: Props) {
    const router = useRouter()
    const dispatch = useAppDispatch()

    const submit = () => {
        if (modal) {
            dispatch(openModal(modal))
        }
        if (link) {
            router.push(link)
        }
    }




    return (
        <div className={`flex ${end && "justify-end"}`}>
            <button onClick={submit} style={style} className={`px-3.5 text-white flex relative backdrop-blur-lg items-center gap-2 cursor-pointer duration-300 hover:scale-105 active:scale-100 font-medium py-3 rounded-full text-sm h-fit border-2 border-white bg-gradient-to-tr`}>
                {icon && <span className='inline text-xs'>
                    {icon}
                </span>
                }
                {title}
            </button>
        </div>
    )
}
