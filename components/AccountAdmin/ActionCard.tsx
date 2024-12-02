type Props = {
    data: {
        icon: any
        title: string
    }
    track: number
}

export default function ActionCard({ data, track }: Props) {

    return (
        <div className={`flex py-7 px-2 cursor-pointer bg-transparent hover:scale-[1.02] duration-300 active:scale-100 group rounded-xl  gap-5 backdrop-blur-2xl flex-col justify-center items-center shad
        `}>
            <p className="text-xl font-semibold duration-500 group-hover:-translate-y-0.5 group-hover:-translate-x-3">{data.title}</p>
            <p className="duration-500 group-hover:translate-x-3 group-hover:translate-y-0.5">
                {data.icon}
            </p>
        </div>
    )
}
