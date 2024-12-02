import React from 'react'

type Props = {
    name: string
    image?: string
    imageStyle?: string
    style?: React.CSSProperties
    nameStyle?: string
}

export default function ImageName({ image, name,style, imageStyle, nameStyle }: Props) {
    return (
        <div style={style} className={`flex flex-col justify-between items-center gap-3 md:gap-5 font-semibold`}>
            <div className={`h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 ${imageStyle} rounded-full border-2`}>
                <img src={image} className='h-full w-full rounded-full object-cover' alt="" />
            </div>
            <p className={`text-[15px] md:text-xl ${nameStyle}`}>{name}</p>
        </div>
    )
}
