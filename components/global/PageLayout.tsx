type Props = {
    children: React.ReactNode
}
export default function PageLayout({ children }: Props) {
    return (
        <div className="flex-1 h-full relative">
            <div className="p-3 flex h-[calc(100vh-80px)]">
                {children}
            </div>
        </div>
    )
}
