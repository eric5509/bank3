import BarChart from "@/components/global/BarChart";
import Button from "@/components/global/Button";
import CreditCard from "@/components/global/CreditCard";
import DoughnutChart from "@/components/global/DoughnutChart";
import RecentTransactionList from "@/components/global/RecentTransactionList";
import Title from "@/components/global/Title";
import MainCardList from "@/components/user/MainCardList";

export default function page() {
  return (
    <div className="p-4">
      <MainCardList />
      <div className="grid grid-cols-[1.25fr_1fr]">
        <div className="">
          <Title title='My Financial Data' />
          <DoughnutChart />
        </div>
        <div className="">
          <RecentTransactionList />
        </div>
      </div>
    </div>
  )
}
