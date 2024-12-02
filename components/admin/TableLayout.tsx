import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function TableLayout({children}: Props) {
  return (
    <div>
          <div className={`overflow-x-auto`}>
            <div className="rounded-md border-2">
                <table className="w-full min-w-[1000px] rounded-xl shadow-blue-800 border-2 overflow-hidden shadow-lg bg-white/15 backdrop-blur-xl text-white text-sm">
                   {children}
                </table>
            </div>
        </div>
    </div>
  )
}
