import InformationLayout from "../global/InformationLayout";
import LabelValue from "../global/LabelValue"
import TitleEditBtn from "../global/TitleEditBtn";
import UpdateLayout from "../admin/UpdateLayout";

export default function BankInfo() {
  return (
    <InformationLayout>
      <TitleEditBtn title="Bank Information" />
      <UpdateLayout grid={4}>
        <LabelValue label="Bank Name" value="First Union Bank" />
        <LabelValue label="Account Number " value="2635422428" />
        <LabelValue label="Routing Number " value="3233263028" />
        <LabelValue label="Account Type" value="Checking" />
      </UpdateLayout>
    </InformationLayout>
  );
}
