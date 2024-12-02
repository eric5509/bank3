import { CgArrowTopRight } from 'react-icons/cg';

type Props = {
    icon: any
    style?: React.CSSProperties
    size?: string 
}
export default function BoxWithIcon({icon, style, size}: Props) {
    return (
        <div style={{...style, height: `${size}`, width: `${size}`}} className="h-10 w-10 rounded-lg grid place-content-center border-2">
            {icon}
        </div>
    )
}
