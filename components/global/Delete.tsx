import { BsTrash } from 'react-icons/bs'


type Props = {
    end?: boolean
    center?: boolean
    loading?: boolean
}
export default function Delete({ end, center, loading }: Props) {
    return (
        <div className={`flex ${end && 'justify-end'} ${center && 'justify-center'}`}>
            <div className={`h-10 duration-300 w-10 grid place-content-center rounded-full ${loading ? " border-[red] bg-white" : 'cursor-pointer hover:scale-110 active:scale-100  border-white bg-[red]'} border-2`}>
                {!loading ?
                    <span className="text-xl text-white">
                        <BsTrash />
                    </span>
                    :
                    <span className="loader2"></span>
                }
            </div>

        </div>
    )
}
