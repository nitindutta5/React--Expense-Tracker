import './App.css'
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react'

function App() {


  const [expenses, setExpenses] = useState([]);
  return (
    <div>
      <h2 className="heading">Expense Tracker</h2>
      <NewExpense updateExpenses={setExpenses} expenses={expenses} />
      {expenses.length > 0 ? (<Expenses data={expenses} updateExpenses={setExpenses} />) : (<h3>No Expenses Available</h3>)}
    </div>
  );
}

export default App;
