import { Pencil } from 'lucide-react'

type Props = {
    style?: React.CSSProperties
    small?: boolean
}

export default function PenButton({ style, small }: Props) {
    return (
        <button style={style} className={` rounded-full grid duration-300 hover:scale-105 active:scale-95 group place-content-center shadow-md shadow-black/30 text-xs uppercase bg-gradient-to-tr from-[#00008b] to-black border-2 border-white text-white font-semibold ${small ? "h-10 w-10" : "h-12 w-12"}`}>
            <Pencil size={small ? 18 : 14} className="group-hover:rotate-[360deg] duration-500" />
        </button>
    )
}
