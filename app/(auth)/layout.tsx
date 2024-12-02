import React from 'react'

type Children = {
    children: React.ReactNode
}

export default function layout({children}: Children) {
  return (
    <div>{children}</div>
  )
}
