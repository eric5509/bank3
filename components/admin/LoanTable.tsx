import TableBody from "../global/TableBody";
import TableHead from "../global/TableHead";
import TableLayout from "./TableLayout";

export default function LoanTable() {
    const headData = ['Account Holder', 'Account Number', 'Amount', 'Reason', 'Date', 'Status']
    const bodyData = [
        {
            accountHolder: 'Anne Mayers Page',
            accountNumber: "217271112",
            amount: "$5,200",
            reason: "Mortgage",
            Date: "20-04-2024",
            status: "pending",
        },
        {
            accountHolder: 'Kareem James Lingard',
            accountNumber: "2665144256",
            amount: "$12,672",
            reason: "Buy a House",
            Date: "17-12-2024",
            status: "success",
        }
        
    ];
    
    
    return (
        <TableLayout>
            <thead>
                <TableHead data={headData} />
            </thead>
            <tbody>
                <TableBody data={bodyData} />
            </tbody>
        </TableLayout>
    )
}

 