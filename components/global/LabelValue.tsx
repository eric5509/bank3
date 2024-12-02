import React from 'react'

type Props = {
  labelStyle?: React.CSSProperties
  valueStyle?: React.CSSProperties
  parentStyle?: React.CSSProperties
  flip?: boolean
  label?: string
  value?: string
  icon?: any
  uppercase?: boolean
  hideLabel?: boolean
  capitalize?: boolean
}

export default function LabelValue({ labelStyle, flip, value, hideLabel, icon, label, capitalize, uppercase, valueStyle, parentStyle }: Props) {
  return (
    <div style={parentStyle} className={`flex ${icon ? 'items-center' : `flex-col  ${flip && 'flex-col-reverse'}`} `}>
      <span>{icon}</span>
      <p style={labelStyle} className={`mb-1.5 text-sm ${hideLabel && 'hidden'}`}>{label}</p>
      <p style={valueStyle} className={`font-semibold break-words text-sm ${capitalize && 'capitalize'} ${uppercase && 'uppercase'}`}>{value}</p>
    </div>
  )
}
