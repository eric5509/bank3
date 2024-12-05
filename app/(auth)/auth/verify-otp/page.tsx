import { TAuthLogin } from "@/components/AccountAdmin/VerifyPin";
import VerifyOTP from "@/components/admin/VerifyOTP";
import { cookies } from "next/headers";

export default async function page() {
  const cookieStore = await cookies()
  const user = cookieStore.get('user')
  let data: TAuthLogin | null = null;
  if(user){
    data = JSON.parse(user.value)
  }
  return (
        <VerifyOTP data={data}/>
  )
}
