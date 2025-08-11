import { useExpenses } from "../context/ExpenseContext";

export default function ExpenseList() {
  const { expenses, deleteExpense } = useExpenses();

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md">
      <h2 className="text-xl font-bold mb-3">Expense List</h2>
      {expenses.length === 0 ? (
        <p className="text-gray-500">No expenses yet</p>
      ) : (
        <ul className="space-y-2">
          {expenses.map((expense) => (
            <li key={expense.id} className="flex justify-between items-center border-b pb-1">
              <span>{expense.name}</span>
              <div className="flex gap-4 items-center">
                <span className="font-bold">₹{expense.amount}</span>
                <button
                  onClick={() => deleteExpense(expense.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  ✕
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
