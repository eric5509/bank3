'use client'
import BoxWithIcon from '@/components/user/BoxWithIcon';
import LabelValue from '@/components/user/LabelValue';
import { BsClockFill } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { CgArrowTopRight } from 'react-icons/cg';

type Props = {
    data: {
        icon: any
        label: string
        value: string
    }
    track: number
}
export default function MainCard({ data, track }: Props) {
    return (
        <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: track * 0.1 }} 
         className={`p-5 bg-[blue]/20 relative group backdrop-blur-2xl overflow-hidden duration-500 hover:border-[#121454] border-2 border-[#121b6e] shad text-white rounded-2xl w-full`}>
            <div className={`h-full w-full  group-hover:left-0 duration-500
            ${track === 0 && "bg-[#00dd4a]"}
            ${track === 1 && "bg-[#e0029a]"}
            ${track === 2 && "bg-[#D4A017]"}
              absolute top-0  ${track % 2 === 0 ? "left-full" : "left-full"} z-0`}></div>
            <div className="relative z-10 flex justify-between">
                <BoxWithIcon size='45px' icon={data.icon} />
            </div>
            <div className="relative z-10 flex items-end justify-between gap-10">
                <LabelValue labelStyle={{ fontSize: '16px' }} valueStyle={{ fontSize: '25px', fontWeight: '600' }} parentStyle={{ gap: '5px', marginTop: "20px" }} label={data.label} value={data.value} />
                <p className='translate-y-1 block'></p>
            </div>
        </motion.div>
    );
}
