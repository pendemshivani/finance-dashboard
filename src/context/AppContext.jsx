import { createContext, useContext, useEffect, useState } from "react";
import transactionsData from "../data/mockData";

const AppContext = createContext();

export const AppProvider = ({ children }) => {

  // ✅ Load from localStorage OR fallback to mockData
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : transactionsData;
  });

  const [role, setRole] = useState("viewer");
  const [filter, setFilter] = useState("all");

  // ✅ Save to localStorage whenever transactions change
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  // ➕ Add
  const addTransaction = (newTransaction) => {
    setTransactions((prev) => [
      ...prev,
      { id: Date.now(), ...newTransaction },
    ]);
  };

  // ❌ Delete
  const deleteTransaction = (id) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  };

  // ✏️ Edit
  const editTransaction = (updatedTransaction) => {
    setTransactions((prev) =>
      prev.map((t) =>
        t.id === updatedTransaction.id ? updatedTransaction : t
      )
    );
  };

  return (
    <AppContext.Provider
      value={{
        transactions,
        role,
        setRole,
        filter,
        setFilter,
        addTransaction,
        deleteTransaction,
        editTransaction,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);