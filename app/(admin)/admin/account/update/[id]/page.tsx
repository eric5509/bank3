import BaseUpdate from "@/components/admin/Base.Update";
import PageLayout from "@/components/global/PageLayout";
import { userLink } from "@/lib/links";

type Params = {
    params: {
        id: string 
    }
}


export default async function page({ params }: Params) {
  const { id } = params;
  const response = await fetch(`${userLink}${id}`)
  const result = await response.json()
  const data = result.data
  return (
    <PageLayout>
      <BaseUpdate data={data}/>
    </PageLayout>
  );
}
