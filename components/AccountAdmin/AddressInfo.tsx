import InformationLayout from "../global/InformationLayout";
import LabelValue from "../global/LabelValue";
import TitleEditBtn from "../global/TitleEditBtn";
import UpdateLayout from "./UpdateLayout";

export default function AddressInfo() {
  return (
    <InformationLayout>
      <TitleEditBtn title="Address Information" />
      <UpdateLayout grid={5}>
        <LabelValue label="Country " value="United States of America" />
        <LabelValue label="Postal Code " value="101231" />
        <LabelValue label="State  " value="Illinios" />
        <LabelValue label="City  " value="Springfield" />
        <LabelValue label="Street  " value="1234 Mapple Avenue" />
      </UpdateLayout>
    </InformationLayout>
  );
}
