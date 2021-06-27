import './ExpenseItem.css'
import { useState } from 'react';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });

  const DeleteExpense = (id) => {
    if (window.confirm("Are you sure you want to delete the expense item?")) {
      let array = [...props.data];
      array.splice(id, 1);
      props.updateExpenses([...array]);
    }
  }
  return (
    <div className="expense-item">
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
      </div>
      <div className="expense-item__description">
        <h2 >{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
        <button onClick={()=>DeleteExpense(props.uniqueId)}>Delete Item</button>
      </div>
    </div>
  )
}


export default ExpenseItem