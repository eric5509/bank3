import { Children } from "react";

type Props = {
    children: React.ReactNode,
    grid: number
}

export default function UpdateLayout({ children, grid }: Props) {
    return (
        <div className={`grid mt-5
             ${grid === 1 && "grid-cols-1"}
             ${grid === 2 && "grid-cols-2"}
             ${grid === 3 && "grid-cols-3"}
             ${grid === 4 && "grid-cols-4"}
             ${grid === 5 && "grid-cols-5"}
         gap-4`}>
            {children}
        </div>
    )
}
