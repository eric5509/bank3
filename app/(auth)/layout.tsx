import {
  allLoansLink,
  allTransferLink,
  optionsLink,
  transactionsLink,
  usersLink,
} from "@/lib/links";
import AdminState from "@/components/admin/AdminState";

type Children = {
  children: React.ReactNode;
};

export default async function layout({ children }: Children) {
  return (
    <div className="min-h-screen ">
      {children}
    </div>
  );
}
