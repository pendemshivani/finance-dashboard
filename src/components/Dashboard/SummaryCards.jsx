import { useApp } from "../../context/AppContext";
import { getTotals } from "../../utils/calculations";
import Card from "../UI/Card";

const SummaryCards = () => {
  const { transactions } = useApp();
  const { income, expenses, balance } = getTotals(transactions);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
      <Card className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
        <h3>Total Balance</h3>
        <p className="text-2xl font-bold">₹{balance}</p>
      </Card>

      <Card className="bg-gradient-to-r from-green-400 to-emerald-500 text-white">
        <h3>Income</h3>
        <p className="text-2xl font-bold">₹{income}</p>
      </Card>

      <Card className="bg-gradient-to-r from-red-400 to-pink-500 text-white">
        <h3>Expenses</h3>
        <p className="text-2xl font-bold">₹{expenses}</p>
      </Card>
    </div>
  );
};

export default SummaryCards;