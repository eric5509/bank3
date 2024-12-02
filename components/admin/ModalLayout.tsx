'use client'
import { useAppSelector } from "@/provider/store/hook"

type Props = {
    children: React.ReactNode
    modal: string
    success?: boolean
    width?: string
}
export default function ModalLayout({ children,success, modal, width }: Props) {
    const open = useAppSelector(store => store.modal.value)
    return (
        <div style={{ width: `${width}` }} className={`grid ${open === modal ? "visible opacity-100" : "opacity-0 invisible"} absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 w-[700px] h-fit duration-500`}>
            <div className={`border-2 ${success ? 'border-black': 'border-white'} overflow-hidden text-white h-full relative w-full duration-500 bg-gradient-to-br from-blue-900 via-[darkblue] to-black p-5 rounded-2xl shadow-lg shadow-black/20`}>
                {children}
            </div>
        </div>
    )
}
