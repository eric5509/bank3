import { BiMessageDetail, BiTransferAlt } from 'react-icons/bi'
import { GrTicket, GrUserAdmin } from 'react-icons/gr'
import { SlCreditCard } from 'react-icons/sl'
import { TbCreditCardPay } from 'react-icons/tb'
import ActionCard from './ActionCard'

export default function ActionCardList() {
    const datas = [
        {
            title: "Transfer",
            icon: <BiTransferAlt size={50} />
        },
        {
            title: "Credit Account",
            icon: <SlCreditCard size={50} />
        },
        {
            title: "Debit Account",
            icon: <TbCreditCardPay size={50} />
        },
        {
            title: "All Tickets",
            icon: <GrTicket size={50} />
        },
        {
            title: "Messages",
            icon: <BiMessageDetail size={50} />
        },
        {
            title: "Edit Admin Details",
            icon: <GrUserAdmin size={50} />
        }
    ]
    return (
        <div className="grid mt-10 text-white gap-5 grid-cols-3">
            {datas.map((data, key) => (
                <ActionCard track={key} key={key} data={data} />
            ))}
        </div>
    )
}
