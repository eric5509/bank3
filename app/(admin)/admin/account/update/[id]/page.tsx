import BaseUpdate from "@/components/admin/Base.Update";
import PageLayout from "@/components/global/PageLayout";

type Params = {
    params: {
        id: string 
    }
}


export default function page({ params }: Params) {
  const { id } = params;
  
  return (
    <PageLayout>
      <BaseUpdate />
    </PageLayout>
  );
}
