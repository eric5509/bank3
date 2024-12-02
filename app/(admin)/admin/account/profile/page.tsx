import BankInfo from "@/components/AccountAdmin/AccountInfo";
import AddressInfo from "@/components/admin/AddressInfo";
import IdentificationTaxInfo from "@/components/admin/IdentificationTaxInfo";
import PersonalInfo from "@/components/admin/PersonalInfo";
import Delete from "@/components/global/Delete";
import Dropdown from "@/components/global/Dropdown";
import Dropdown2 from "@/components/global/Dropdown2";
import PageLayout from "@/components/global/PageLayout";
import PenButton from "@/components/global/PenButton";
import Title from "@/components/global/Title";

export default function page() {
    return (
        <PageLayout>
            <div className="flex w-full justify-between items-center">
                <Title title="Profile" />
                <div className="flex items-center gap-7">
                    <Dropdown />
                    <Dropdown2 />
                    <Delete />
                    <PenButton small />
                </div>
            </div>
            <div className="space-y-5 mt-5">
                <PersonalInfo />
                <AddressInfo />
                <IdentificationTaxInfo />
                <BankInfo />
            </div>
        </PageLayout>
    )
}
