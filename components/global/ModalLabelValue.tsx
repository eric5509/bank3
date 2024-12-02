import React from 'react'

type Props = {
    label: string
    value?: string | number
    labelStyle?: string
    valueStyle?: string
    capitalize?: boolean
    flex?: boolean
    gap?: string
    uppercase?: boolean
}

export default function ModalLabelValue({ label, value, gap, capitalize, labelStyle, flex,uppercase, valueStyle }: Props) {
    return (
        <div style={{ gap: `${gap}` }} className={`flex ${flex ? 'flex-row items-center' : 'flex-col'} gap-0.5`}>
            <p className={`${labelStyle}`}>{label}</p>
            <p className={`${valueStyle} text-wrap ${capitalize && 'capitalize'} ${uppercase && 'uppercase'} font-medium`}>{value}</p>
        </div>
    )
}
