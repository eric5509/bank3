import BaseCreateAccount from '@/components/admin/Base.CreateAccount'
import AnimatePageLayout from '@/components/global/AnimatePageLayout'
import PageLayout from '@/components/global/PageLayout'
import React from 'react'

export default function page() {
    return (
        <AnimatePageLayout>
            <BaseCreateAccount />
        </AnimatePageLayout>
    )
}
