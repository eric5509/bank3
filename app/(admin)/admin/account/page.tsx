import BaseAccount from '@/components/AccountAdmin/Base'
import AnimatePageLayout from '@/components/global/AnimatePageLayout'
import { usersLink } from '@/lib/links'
import React from 'react'

export default async function page() {
  const accounts = await fetch(usersLink)
  const response = await accounts.json()
  const result = response.data
  console.log(result)
  return (
      <AnimatePageLayout>
       <BaseAccount accounts={result}/>
      </AnimatePageLayout>
  )
}
 