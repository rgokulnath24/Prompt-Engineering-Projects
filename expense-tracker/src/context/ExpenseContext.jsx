import { createContext, useContext, useState } from "react";

const ExpenseContext = createContext();

export function ExpenseProvider({ children }) {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (name, amount) => {
    setExpenses([...expenses, { id: Date.now(), name, amount: parseFloat(amount) }]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const total = expenses.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense, deleteExpense, total }}>
      {children}
    </ExpenseContext.Provider>
  );
}

export function useExpenses() {
  return useContext(ExpenseContext);
}
