import { useExpenses } from "../context/ExpenseContext";

export default function TotalExpense() {
  const { total } = useExpenses();

  return (
    <div className="bg-green-100 p-4 rounded-2xl shadow-md text-center">
      <h2 className="text-lg font-bold">Total Spent</h2>
      <p className="text-2xl font-bold text-green-700">₹{total}</p>
    </div>
  );
}
