import { useApp } from "../../context/AppContext";

const InsightsPanel = () => {
  const { transactions } = useApp();

  if (transactions.length === 0) {
    return (
      <div className="bg-white p-5 rounded-xl shadow mt-6">
        No data available
      </div>
    );
  }

  // 👉 Highest spending category
  const categoryMap = {};
  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryMap[t.category] =
        (categoryMap[t.category] || 0) + t.amount;
    }
  });

  const highestCategory =
    Object.keys(categoryMap).reduce((a, b) =>
      categoryMap[a] > categoryMap[b] ? a : b
    );

  // 👉 Total income vs expenses
  let income = 0;
  let expenses = 0;

  transactions.forEach((t) => {
    if (t.type === "income") income += t.amount;
    else expenses += t.amount;
  });

  return (
    <div className="mt-6 bg-white/70 backdrop-blur-lg p-5 rounded-2xl shadow-xl">
      <h2 className="text-xl font-bold mb-4">Insights</h2>

      <div className="grid md:grid-cols-3 gap-4">

        {/* Insight 1 */}
        <div className="p-4 rounded-xl bg-blue-100">
          <p className="text-sm text-gray-600">
            Highest Spending Category
          </p>
          <h3 className="text-lg font-bold text-blue-700">
            {highestCategory}
          </h3>
        </div>

        {/* Insight 2 */}
        <div className="p-4 rounded-xl bg-green-100">
          <p className="text-sm text-gray-600">Total Income</p>
          <h3 className="text-lg font-bold text-green-700">
            ₹{income}
          </h3>
        </div>

        {/* Insight 3 */}
        <div className="p-4 rounded-xl bg-red-100">
          <p className="text-sm text-gray-600">Total Expenses</p>
          <h3 className="text-lg font-bold text-red-600">
            ₹{expenses}
          </h3>
        </div>

      </div>
    </div>
  );
};

export default InsightsPanel;