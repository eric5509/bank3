import React from 'react'

export default function AuthFooter() {
    const terms = ["Terms & Condition", "Privacy Policy", "Help"];

    return (
        <div className="h-24 bg-gray-50 font-light border-t w-full">
            <div className="flex h-full justify-between gap-10 text-13 items-center w-[1200px] mx-auto">
                <p >
                    © 2024 All Rights Reserved First Union- Checking, Saving, Mortgage,
                    Credit Cards, Loans.
                </p>
                <div className="flex gap-4 text-13 font-normal  text-red-600">
                    {terms.map((el, key) => (
                        <p key={key} className=" cursor-pointer">{el}</p>
                    ))}
                </div>
            </div>
        </div>)
}
