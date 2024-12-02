import InformationLayout from "../global/InformationLayout";
import LabelValue from "../global/LabelValue";
import TitleEditBtn from "../global/TitleEditBtn";
import UpdateLayout from "./UpdateLayout";

export default function IdentificationTaxInfo() {
  return (
    <InformationLayout>
      <TitleEditBtn title="Identification & Tax Information" />
      <UpdateLayout grid={2}>
        <LabelValue label="COT " value="3233263028" />
        <LabelValue label="IMF " value="IGHSFG6215" />
      </UpdateLayout>
    </InformationLayout>
  );
}
