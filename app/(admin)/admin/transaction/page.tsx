import Base from '@/components/AdminTransaction/Base'
import AnimatePageLayout from '@/components/global/AnimatePageLayout'
import PageLayout from '@/components/global/PageLayout'
import { optionsLink, transactionsLink, usersLink } from '@/lib/links'


export default async function page() {
   
    return (
        <PageLayout>
            <AnimatePageLayout>
                <Base  />
            </AnimatePageLayout>
        </PageLayout>
    )
}
