'use client'
import { TiArrowSortedUp } from "react-icons/ti";
import { AiOutlineWifi } from "react-icons/ai";

type Props = {
    track: number
    style?: React.CSSProperties

}
// motion.div
//       initial={{ y: 30, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.5, delay: track * 0.1 }}

export default function CreditCard({ track, style }: Props) {
    const images = ['https://t4.ftcdn.net/jpg/03/84/99/21/360_F_384992156_1ph56he4NRdEaClxECJjNJtNO4jafEIX.jpg', 'https://w0.peakpx.com/wallpaper/349/236/HD-wallpaper-red-dots-wavy-lines-black-background-red.jpg', 'https://img.freepik.com/premium-photo/dark-purple-wave-banner-background_941600-8605.jpg', 'https://img.freepik.com/premium-photo/wave-with-red-blue-lines-blue-background_555090-126718.jpg', 'https://img.freepik.com/premium-photo/red-wave-with-black-background_916191-11187.jpg', 'https://img.freepik.com/premium-photo/wave-with-blue-background-that-says-wave-it_993259-8702.jpg']
    return (
        <div className="relative text-white w-fit overflow-hidden cursor-pointer shadow-md shadow-blue-800 rounded-2xl">
            <div className="flex flex-col relative peer z-10 justify-between h-60 w-96 p-5">
                <div className="flex font-semibold mb-2 justify-between items-center">
                    <span>Chase Bank</span>
                    <span>Credit Card</span>
                </div>
                <div className="flex justify-between mb-2 items-center w-full overflow-hidden ">
                    <img src="chip.png" className="h-8" alt="" />
                    <AiOutlineWifi className="rotate-90 text-2xl" />
                </div>
                <div className="">
                    <p className="text-lg font-bold"> 4000 0566 5566 5556</p>
                    <p className="text-sm">5434</p>
                </div>
                <p className={`font-medium text-sm text-end`}>01/80</p>
                <div className="flex text-xs justify-between items-center">
                    <p className="uppercase font-semibold">Tony Cordiela Johnson</p>
                    <p className="font-medium">Amex</p>
                </div>
            </div>
            {/* <img src={`${images[track >= images.length ? track - images.length : track]}`} className="h-full w-full  peer-hover:scale-125 rounded-2xl object-cover duration-500 absolute top-0 left-0 z-0" alt="" /> */}
        </div>
    );
}
