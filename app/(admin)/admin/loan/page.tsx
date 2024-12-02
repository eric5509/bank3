import LoanTable from '@/components/admin/LoanTable'
import Button from '@/components/global/Button'
import Dropdown from '@/components/global/Dropdown'
import PageLayout from '@/components/global/PageLayout'
import Title from '@/components/global/Title'

export default function page() {
    return (
        <PageLayout>
            <div className='flex mb-3 z-30 relative justify-between items-center'>
                <Title title='Loans' />
                <div className="flex gap-4">
                    <Button title='Apply for Loan' />
                    <Dropdown />
                </div>
            </div>
            <LoanTable />
        </PageLayout>
    )
}
