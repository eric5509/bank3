import QuickLinkList from "@/components/admin/QuickLinkList";
import Button from "@/components/global/Button";
import Dropdown from "@/components/global/Dropdown";
import Title from "@/components/global/Title";
import { FaPlus } from "react-icons/fa6";
import PageLayout from "@/components/global/PageLayout";
import AnimatePageLayout from "@/components/global/AnimatePageLayout";
import ActionCardList from "@/components/AccountAdmin/ActionCardList";

export default function page() {
  return (
    <PageLayout>
      <AnimatePageLayout>
        <div className="flex z-30 relative mb-5 items-center justify-between">
          <Title title='Quick Links' />
          <div className="flex gap-5">
            <Button link="/admin/account/create" title='Create Account' icon={<FaPlus size={18} />} style={{ background: 'green' }} />
            <Dropdown account />
          </div>
        </div>
        <QuickLinkList />
        <ActionCardList />
      </AnimatePageLayout>
    </PageLayout>
  )
}
