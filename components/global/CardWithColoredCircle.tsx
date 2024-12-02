
export default function CardWithColoredCircle() {
    return (
        <div className="bg-gray-200 p-4 rounded-2xl shadow-md w-64">
            <div className="flex justify-between items-center">
                <p>Income</p>
                <div className="h-6 w-6 shadow-md bg-red-500 rounded-full"></div>
            </div>
            <p className="text-19 mt-4 font-semibold">$9,234.05</p>
        </div>
    )
}
