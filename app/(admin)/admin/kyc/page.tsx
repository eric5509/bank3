import KYCTable from "@/components/admin/KYCTable";
import Dropdown from "@/components/global/Dropdown";
import PageLayout from "@/components/global/PageLayout";
import Title from "@/components/global/Title";

export default function page() {
    return (
        <PageLayout>
            <div className="flex mb-3 justify-between items-center">
                <Title title="KYC" />
                <div className="flex">
                    <Dropdown />
                </div>
            </div>
            <KYCTable />
        </PageLayout>
    )
}
