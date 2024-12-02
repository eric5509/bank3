type Props = {
    title: string
    style?: React.CSSProperties
}

export default function Title({ title, style }: Props) {
    return (
        <p style={style} className={`text-2xl font-semibold text-white `}>{title}</p>
    )
}
