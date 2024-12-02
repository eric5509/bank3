import TableBody from "../global/TableBody";
import TableHead from "../global/TableHead";
import TableLayout from "./TableLayout";

export default function KYCTable() {
    const headData = ['Account Holder', 'Account Number', 'Document Image', 'Document Type', 'Status']
    const bodyData = [
        {
            accountHolder: 'Anne Mayers Page',
            accountNumber: "217271112",
            image: "",
            documentType: "Passport",
            status: "pending",
        },
        {
            accountHolder: 'James Milner Psypher',
            accountNumber: "3241561524",
            image: "",
            documentType: "Drivers License",
            status: "success",
        },
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

