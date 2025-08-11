import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import TotalExpense from "./components/TotalExpense";
import { ExpenseProvider } from "./context/ExpenseContext";

export default function App() {
  return (
    <ExpenseProvider>
      <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-300 to-orange-200 p-6 flex flex-col items-center gap-6">
        <h1 className="text-3xl font-bold text-white">💰 Expense Tracker</h1>
        <div className="grid gap-6 w-full max-w-md">
          <ExpenseForm />
          <ExpenseList />
          <TotalExpense />
        </div>
      </div>
    </ExpenseProvider>
  );
}
