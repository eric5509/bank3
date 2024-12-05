import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function layout({children}: Props) {
  return (
    <div className='min-h-screen  pt-16'>{children}</div>
  )
}
