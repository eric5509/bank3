import BaseAccount from '@/components/AccountAdmin/Base'
import AnimatePageLayout from '@/components/global/AnimatePageLayout'
import { usersLink } from '@/lib/links'
import React from 'react'

export default async function page() {
  return (
      <AnimatePageLayout>
       <BaseAccount />
      </AnimatePageLayout>
  )
}
 