import BalanceChart from "../components/Dashboard/BalanceChart";
import CategoryChart from "../components/Dashboard/CategoryChart";
import SummaryCards from "../components/Dashboard/SummaryCards";
import InsightsPanel from "../components/Insights/InsightsPanel";
import RoleSwitcher from "../components/Role/RoleSwitcher";
import TransactionTable from "../components/Transactions/TransactionTable";

const Dashboard = () => {
  return (
    <div className="min-h-screen p-6 md:p-10">
      <div className="max-w-6xl mx-auto">

        <RoleSwitcher />
        <SummaryCards />

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-6">
          <BalanceChart />
          <CategoryChart />
        </div>

        {/* Insights */}
        <InsightsPanel />

        <TransactionTable />

      </div>
    </div>
  );
};

export default Dashboard;