'use client'
import CountUp from 'react-countup'

type Props = {
    detail: {
        title: string
        number: number
    }
}

export default function QuickLinksCard({ detail }: Props) {
    return (
        <div className="flex bg-[blue]/20 relative backdrop-blur-2xl py-7 shad px-2 hover:scale-105 duration-500 rounded-full hover:border-white border-2 border-[#122e6e] gap-5 group h-full justify-center items-center ">
            <p className='text-3xl font-semibold hover:scale-105'>
                <CountUp duration={3} end={detail.number} />
            </p>
            <p className='text-sm uppercase'>{detail.title}</p>
        </div>
    )
}
