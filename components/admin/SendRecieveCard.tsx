import { RiUserReceived2Line } from "react-icons/ri";

export default function SendRecieveCard() {
    return (
        <div>
            <div className="p-5 text-white w-36 flex flex-col justify-between gap-7 bg-black rounded-2xl">
                <RiUserReceived2Line size={22}/>
                <p className="font-semibold text-15">Send</p>
            </div>
        </div>
    )
}
