import Base from '@/components/AdminTransfer/Base'
import AnimatePageLayout from '@/components/global/AnimatePageLayout'
import PageLayout from '@/components/global/PageLayout'

export default async function page() {
    return (
        <PageLayout>
            <AnimatePageLayout>
                <Base  />
            </AnimatePageLayout>
        </PageLayout>

    )
}
