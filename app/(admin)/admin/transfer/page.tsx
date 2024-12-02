import Base from '@/components/AdminTransfer/Base'
import AnimatePageLayout from '@/components/global/AnimatePageLayout'
import PageLayout from '@/components/global/PageLayout'
import { allTransferLink, optionsLink, usersLink } from '@/lib/links'

export default async function page() {
    const request = await fetch(allTransferLink)
    const response = await request.json()
    const Transfers = response.data
    const accounts = await fetch(usersLink)
    const response1 = await accounts.json()
    const Accounts = response1.data
    const options = await fetch(optionsLink)
    const response2 = await options.json()
    const Options = response2.data
    return (
        <PageLayout>
            <AnimatePageLayout>
                <Base transfers={Transfers} accounts={Accounts} options={Options}/>
            </AnimatePageLayout>
        </PageLayout>

    )
}
