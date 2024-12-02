import { IoSettings } from "react-icons/io5";
import { DiGitCompare } from "react-icons/di";

export default function TitleAndTwoIconsToTheRight() {
  return (
    <div className="flex justify-between items-center">
        <p className="font-semibold">Analytics</p>
        <div className="flex gap-7">
            <div className="h-10 w-10 border-gray-500 cursor-pointer border-2 grid place-content-center rounded-full">
                <IoSettings />  
            </div>
            <div className="h-10 w-10 border-gray-500 cursor-pointer border-2 grid place-content-center rounded-full">
                <DiGitCompare />
            </div>
        </div>
    </div>
  )
}
