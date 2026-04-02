import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useApp } from "../../context/AppContext";

const BalanceChart = () => {
  const { transactions } = useApp();

  // Convert data
  let balance = 0;
  const data = transactions.map((t) => {
    balance += t.type === "income" ? t.amount : -t.amount;
    return {
      date: t.date,
      balance,
    };
  });

  return (
    <div className="bg-white p-5 rounded-2xl shadow-md mt-6">
      <h2 className="text-lg font-semibold mb-4">Balance Trend</h2>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="balance" stroke="#6366f1" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BalanceChart;