import { useApp } from "../../context/AppContext";
import Button from "../UI/Button";
import Card from "../UI/Card";
import EmptyState from "../UI/EmptyState";
import AddTransactionForm from "./AddTransactionForm";

const TransactionTable = () => {
  const { transactions, filter, role, deleteTransaction } = useApp();

  const filtered = transactions.filter((t) =>
    filter === "all" ? true : t.type === filter
  );

  return (
    <Card className="mt-8">

      {role === "admin" && <AddTransactionForm />}

      <h2 className="text-xl font-bold mb-4">Transactions</h2>

      {filtered.length === 0 ? (
        <EmptyState />
      ) : (
        <table className="w-full">
          <thead>
            <tr className="text-gray-500 text-sm border-b">
              <th className="text-left pb-2">Date</th>
              <th className="text-left">Category</th>
              <th className="text-left">Type</th>
              <th className="text-right">Amount</th>
              {role === "admin" && <th className="text-right">Actions</th>}
            </tr>
          </thead>

          <tbody>
            {filtered.map((t) => (
              <tr key={t.id} className="border-b hover:bg-gray-100/50">
                <td className="py-3">{t.date}</td>
                <td>{t.category}</td>
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      t.type === "income"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-500"
                    }`}
                  >
                    {t.type}
                  </span>
                </td>
                <td className="text-right font-semibold">₹{t.amount}</td>

                {role === "admin" && (
                  <td className="text-right space-x-2">
                    <Button variant="secondary">Edit</Button>
                    <Button
                      variant="danger"
                      onClick={() => deleteTransaction(t.id)}
                    >
                      Delete
                    </Button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Card>
  );
};

export default TransactionTable;