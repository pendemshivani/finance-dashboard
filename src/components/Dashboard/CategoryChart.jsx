import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { useApp } from "../../context/AppContext";

const COLORS = ["#6366f1", "#22c55e", "#f97316", "#ef4444", "#14b8a6"];

const CategoryChart = () => {
  const { transactions } = useApp();

  // Group by category (expenses only)
  const categoryMap = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryMap[t.category] =
        (categoryMap[t.category] || 0) + t.amount;
    }
  });

  const data = Object.keys(categoryMap).map((key) => ({
    name: key,
    value: categoryMap[key],
  }));

  return (
    <div className="bg-white p-5 rounded-2xl shadow-md mt-6">
      <h2 className="text-lg font-semibold mb-4">Spending Breakdown</h2>

      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie data={data} dataKey="value" outerRadius={80}>
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoryChart;