import { useState } from "react";
import { useExpenses } from "../context/ExpenseContext";

export default function ExpenseForm() {
  const { addExpense } = useExpenses();
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !amount) return;
    addExpense(name, amount);
    setName("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 bg-white p-4 rounded-2xl shadow-md">
      <input
        type="text"
        placeholder="Expense Name"
        className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-all"
      >
        Add Expense
      </button>
    </form>
  );
}
