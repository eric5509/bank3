
type Props = {
    detail: {
        title: string
        amount: number
        dateTime: string
        image?: string
        debit: boolean
    }
}

export default function RecentTransactionCard({ detail }: Props) {
    return (
        <div className="flex justify-between items-center text-white text-sm">
            <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg border-2"></div>
                <div className="">
                    <p className="font-semibold">{detail.title}</p>
                    <p className="text-9">12 Oct 2024</p>
                </div>
            </div>
            <p className={`${detail.debit ? "text-[red]" : "text-[#2ff22f]"}`}>{detail.debit ? "-" : "+"}${detail.amount.toLocaleString()}</p>
        </div>
    )
}
