import { useEffect, useState } from "react";
import { useApp } from "../../context/AppContext";

const AddTransactionForm = ({ editData, setEditData }) => {
  const { addTransaction, editTransaction } = useApp();

  const [form, setForm] = useState({
    date: "",
    amount: "",
    category: "",
    type: "expense",
  });

  useEffect(() => {
    if (editData) {
      setForm(editData);
    }
  }, [editData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editData) {
      editTransaction({ ...form, amount: Number(form.amount) });
      setEditData(null);
    } else {
      addTransaction({ ...form, amount: Number(form.amount) });
    }

    setForm({
      date: "",
      amount: "",
      category: "",
      type: "expense",
    });
  };

  return (
    <form className="bg-white p-4 rounded-xl shadow mb-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          className="border p-2 rounded"
          required
        />

        <input
          type="number"
          placeholder="Amount"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
          className="border p-2 rounded"
          required
        />

        <input
          type="text"
          placeholder="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          className="border p-2 rounded"
          required
        />

        <select
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
          className="border p-2 rounded"
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
      </div>

      <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded">
        {editData ? "Update" : "Add Transaction"}
      </button>
    </form>
  );
};

export default AddTransactionForm;