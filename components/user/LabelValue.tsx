import React from 'react'

type Props = {
    labelStyle?: React.CSSProperties 
    valueStyle?: React.CSSProperties
    parentStyle?: React.CSSProperties
    flip?: boolean 
    label: string
    value: string
    uppercase?: boolean
    capitalize?: boolean
}

export default function LabelValue({labelStyle,flip,value, label, capitalize,uppercase, valueStyle, parentStyle}: Props) {
  return (
    <div style={parentStyle} className={`flex flex-col  ${flip && 'flex-col-reverse'} `}>
        <p style={labelStyle} className='mb-2'>{label}</p>
        <p style={valueStyle} className={`font-semibold text-sm ${capitalize && 'capitalize'} ${uppercase && 'uppercase'}`}>{value}</p>
    </div>
  )
}
