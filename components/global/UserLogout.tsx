import { ChevronDown } from 'lucide-react'
import React from 'react'


type Props = {
    name: string
}

export default function UserLogout({ name }: Props) {
    return (
        <div className="flex w-52 p-2 h-11 rounded-lg text-white justify-between items-center">
            <div className="h-8 w-8 shrink-0 mr-3 rounded-lg border-2"></div>
            <p className='font-semibold text-sm'>{name}</p>
            <ChevronDown className='ml-auto' />
        </div>
    )
}
