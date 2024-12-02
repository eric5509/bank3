import React from 'react'

type Props = {
    title: string
}

export default function TitleEditBtn({ title }: Props) {
    return (
        <div className="flex text-lg font-bold items-center justify-between">
            <p> {title}</p>
            {/* <p className="font-medium text-sm px-5 py-2 cursor-pointer duration-300 hover:scale-105 active:scale-100 bg-red-500 rounded-md">
                Edit
            </p> */}
        </div>
    )
}
