
type Props = {
    success: boolean
}

export default function Success({success}: Props) {
    return (
        <div className={`bg-black duration-500 flex flex-col items-center justify-center absolute top-0 left-0 h-full w-full z-20 rounded-2xl ${success ? "opacity-100 visible" : "invisible opacity-0"}`}>
            <img src="https://i.pinimg.com/originals/70/a5/52/70a552e8e955049c8587b2d7606cd6a6.gif" className={`duration-500 h-full w-full object-cover ${success ? "opacity-100 visible" : "invisible opacity-0"}`} alt="" />
        </div>
    )
}
