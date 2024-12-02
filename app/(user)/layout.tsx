import Sidebar from "@/components/user/Sidebar";

type Props = {
  children: React.ReactNode
}

export default function layout({ children }: Props) {
  return (
    <div className="h-screen overflow-y-auto grid grid-cols-[300px_1fr]">
      <Sidebar />
      <div className="h-full flex overflow-y-auto flex-col">
        <div className="h-20 border-b-2"></div>
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  )
}
