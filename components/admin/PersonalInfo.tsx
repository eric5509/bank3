import InformationLayout from "../global/InformationLayout";
import LabelValue from "../global/LabelValue";
import TitleEditBtn from "../global/TitleEditBtn"
import UpdateLayout from "./UpdateLayout";

export default function PersonalInfo() {
  return (
    <InformationLayout>
      <TitleEditBtn title="Personal Information" />
      <UpdateLayout grid={4}>
        <LabelValue label="Fullname" value="Anne Mayers Paige" />
        <LabelValue label="Phone" value="anne@gmail.com" />
        <LabelValue label="Email" value="+2313432342" />
        <LabelValue label="Gender" value="Female" />
        <LabelValue label="Date of Birth" value="20-04-1975" />
        <LabelValue label="Occupation" value="Nurse" />
        <LabelValue label="Marital Status" value="Single" />
        <LabelValue label="Nationality" value="American" />
      </UpdateLayout>
    </InformationLayout>
  );
}
