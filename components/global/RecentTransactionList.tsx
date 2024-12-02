import RecentTransactionCard from './RecentTransactionCard'
import Title from './Title'

export default function RecentTransactionList() {
    const details = [
        {
            title: "Facebook",
            amount: 120,
            dateTime: "20, Jun 2024 - 10:20",
            debit: true,
        },
        {
            title: "Mom",
            amount: 1200,
            dateTime: "12, Apr 2024 - 21:32",
            debit: false,
        },
        {
            title: "Netflix",
            amount: 250,
            dateTime: "15, Aug 2024 - 15:45",
            debit: true,
        },
        {
            title: "Dad",
            amount: 800,
            dateTime: "10, Sep 2024 - 08:10",
            debit: false,
        },
        {
            title: "Amazon",
            amount: 500,
            dateTime: "05, Mar 2024 - 14:00",
            debit: true,
        },
        {
            title: "Friend",
            amount: 150,
            dateTime: "22, Nov 2024 - 19:20",
            debit: false,
        },
        {
            title: "Spotify",
            amount: 100,
            dateTime: "28, Feb 2024 - 11:50",
            debit: true,
        },
        {
            title: "Boss",
            amount: 3000,
            dateTime: "02, Dec 2024 - 09:30",
            debit: false,
        },
        {
            title: "Gym",
            amount: 70,
            dateTime: "14, Oct 2024 - 06:00",
            debit: true,
        },
        {
            title: "Electricity Bill",
            amount: 400,
            dateTime: "01, Jul 2024 - 12:15",
            debit: true,
        },
    ];
    
    return (
        <div className="">
            <Title title='Recent Activity' />
            <div className='flex flex-col gap-3'>
                {details.map((el, key) => (
                    <RecentTransactionCard key={key} detail={el} />
                ))}
            </div>
        </div>
    )
}
