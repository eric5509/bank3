import Sidebar from "@/components/admin/Sidebar";
import Backdrop from "@/components/global/Backdrop";
import LayoutTopNav from "@/components/global/LayoutTopNav";

type Props = {
  children: React.ReactNode
}

export default function layout({ children }: Props) {
  return (
    <div className="h-screen grid overflow-y-auto grid-cols-[300px_1fr]">
      <Backdrop />
      <Sidebar />
      <div className="h-full flex overflow-y-auto flex-col">
        <div className="h-20 border-b-2">
          <LayoutTopNav />
        </div>
        <div className="flex-1 flex flex-col overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  )
}
