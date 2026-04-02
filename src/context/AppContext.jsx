import { createContext, useContext, useState } from "react";
import transactionsData from "../data/mockData";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(transactionsData);
  const [role, setRole] = useState("viewer");
  const [filter, setFilter] = useState("all");

  const addTransaction = (newTransaction) => {
    setTransactions((prev) => [
      ...prev,
      { id: Date.now(), ...newTransaction },
    ]);
  };

  // ✅ Delete
  const deleteTransaction = (id) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  };

  // ✅ Edit
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