import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function InformationLayout({ children }: Props) {
    return (
        <div className="p-4 text-white border-2 rounded-xl shadow-md">
            {children}
        </div>
    )
}
