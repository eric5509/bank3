import { Users } from "lucide-react";
import NavCard from "../global/NavCard";
import { IoHome } from "react-icons/io5";
import { CgCreditCard } from "react-icons/cg";
import { FcBiohazard } from "react-icons/fc";
import { FaRegMessage } from "react-icons/fa6";
import { RiPassValidLine } from "react-icons/ri";
import { PiMoneyWavy } from "react-icons/pi";
import { LuClock } from "react-icons/lu";
import { BiTransferAlt } from "react-icons/bi";
import { TLink } from "../global/type2";

export default function Sidebar() {
  const links: TLink[] = [
    {
      title: "Home",
      link: "",
      icon: <IoHome size={15} />,
    },
    {
      title: "Transactions",
      link: "accounts",
      icon: <Users size={15} />,
    },
    {
      title: "Cards",
      link: "transfers",
      icon: <BiTransferAlt size={15} />,
    },
    {
      title: "Loan",
      link: "transactions",
      icon: <LuClock size={15} />,
    },
    {
      title: "Profile",
      link: "loan",
      icon: <PiMoneyWavy size={18} />,
    },
    {
      title: "Logout",
      link: "message",
      icon: <FaRegMessage size={18} />,
    },
  ];
  return (
    <div className="border-r-2 flex flex-col w-[300px]">
      <div className="h-16 border-b-2a flex items-center px-4">
        <div className="flex items-center gap-2">
          <FcBiohazard size={40} />
          <p className="text-lg text-white font-semibold">
            Capital Trust Bank.
          </p>
        </div>
      </div>
      <div className="flex-1 p-4 flex-col flex justify-between">
        <div className="space-y-2">
          {links.map((el, key) => (
            <NavCard
              title={el.title}
              key={key}
              data={el?.data}
              link={el.link}
              icon={el.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
