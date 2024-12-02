import Base from '@/components/AdminTransaction/Base'
import AnimatePageLayout from '@/components/global/AnimatePageLayout'
import PageLayout from '@/components/global/PageLayout'
import { optionsLink, transactionsLink, usersLink } from '@/lib/links'


export default async function page() {
    const request = await fetch(transactionsLink)
    const response = await request.json()
    const Transactions = response.data
    const accounts = await fetch(usersLink)
    const response1 = await accounts.json()
    const Accounts = response1.data
    const options = await fetch(optionsLink)
    const response2 = await options.json()
    const Options = await response2
    return (
        <PageLayout>
            <AnimatePageLayout>
                <Base accounts={Accounts} options={Options} transactions={Transactions} />
            </AnimatePageLayout>
        </PageLayout>
    )
}
