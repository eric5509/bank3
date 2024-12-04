"use client";
import Link from "next/link";
import LabelValue from "../global/LabelValue";
import Dropdown from "../global/Dropdown";
import Delete from "../global/Delete";
import ModalLayout2 from "../admin/ModalLayout";
import { useAppDispatch, useAppSelector } from "@/provider/store/hook";
import UpdateActiveButton from "../global/UpdateActiveButton";
import { useState } from "react";
import { deleteAccount } from "@/lib/Delete";
import { fetchAllUsers } from "@/lib/Get";
import { emptyAccounts, loadAccounts } from "@/provider/slice/account";
import { closeModal } from "@/provider/slice/modal";
import { House } from "lucide-react";

type Props = {
  modal: string;
};

export default function AccountModal({ modal }: Props) {
  const data = useAppSelector((store) => store.account.account);
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const storeData = useAppSelector((store) => store.account.account);

  const deleteUser = async () => {
    if (loading) return;
    setLoading(true);
    const accountDeleted = await deleteAccount(storeData?.userID);
    console.log(accountDeleted, storeData, "Account Deleted");
    if (accountDeleted.success) {
      const result = await fetchAllUsers();
      if (result.success) {
        if (result.data?.length > 0) {
          dispatch(loadAccounts(result.data));
        } else {
          dispatch(emptyAccounts());
        }
      }
      setLoading(false);
      return dispatch(closeModal());
    }
    return setLoading(false);
  };
  return (
    <ModalLayout2 modal={modal}>
      <div className="flex items-center gap-4">
        <div className="w-full">
          <div className="flex items-center justify-between">
            <div className="flex gap-5 items-center">
              <img alt="" className="h-[75px] w-[75px] rounded-full border-2" src="a" />
              <Link
                href={"/accounts/5"}
                className="text-xl duration-300 capitalize hover:scale-105 hover:underline hover:text-emerald-500 font-semibold"
              >
                {data?.firstName} {data?.middleName} {data?.lastName}
              </Link>
            </div>
            <div className="flex items-center gap-5">
              <UpdateActiveButton id={data?.id} />
              <Dropdown />
              <div onClick={deleteUser} className="">
                <Delete loading={loading} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-7">
        <div className="grid mb-5 text-[15px] grid-cols-4 gap-7">
          <LabelValue
            labelStyle={{ color: "lightgray" }}
            label="Phone Number"
            value={data?.phone}
          />
          <LabelValue
            labelStyle={{ color: "lightgray" }}
            label="Email"
            value={data?.email}
          />
          <LabelValue
            labelStyle={{ color: "lightgray" }}
            label="Date of Birth"
            value={data?.dob}
          />
          <LabelValue
            labelStyle={{ color: "lightgray" }}
            capitalize
            label="Nationality"
            value={data?.nationality}
          />
          <LabelValue
            labelStyle={{ color: "lightgray" }}
            label="Currency"
            uppercase
            value={data?.currency}
          />
          <LabelValue
            labelStyle={{ color: "lightgray" }}
            label="Occupation"
            value={data?.occupation}
          />
          <LabelValue
            labelStyle={{ color: "lightgray" }}
            label="Marital Status"
            capitalize
            value={data?.maritalStatus}
          />
          <LabelValue
            labelStyle={{ color: "lightgray" }}
            label="Account Type"
            capitalize
            value={data?.accountType}
          />
          <LabelValue
            labelStyle={{ color: "lightgray" }}
            label="Account Number"
            value={data?.accountNumber}
          />
          <LabelValue
            labelStyle={{ color: "lightgray" }}
            label="Current Balance"
            value={`$${data?.currentBalance?.toLocaleString()}`}
          />
          <LabelValue
            labelStyle={{ color: "lightgray" }}
            label="Available Balance"
            value={`$${data?.availableBalance?.toLocaleString()}`}
          />
          <LabelValue
            labelStyle={{ color: "lightgray" }}
            label="COT"
            value={data?.cot}
          />
          <LabelValue
            labelStyle={{ color: "lightgray" }}
            label="IMF"
            value={data?.imf}
          />
          <LabelValue
            labelStyle={{ color: "lightgray" }}
            label="Transfer PIN"
            value={data?.transferPin}
          />
          <LabelValue
            labelStyle={{ color: "lightgray" }}
            label="Login PIN"
            value={data?.authPin}
          />
          <LabelValue
            labelStyle={{ color: "lightgray" }}
            label="Password"
            value={data?.password}
          />
        </div>
        <div className="flex items-center mt-5 gap-4">
          <House size={25} />
          <LabelValue
            labelStyle={{ color: "lightgray" }}
            capitalize
            label=""
            value={`${data?.street} ${data?.city} ${data?.state} ${data?.zipCode} ${data?.country}`}
          />
        </div>
      </div>
    </ModalLayout2>
  );
}
