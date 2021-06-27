import './ExpenseForm.css'
import {useState} from 'react'
const ExpenseForm = (props) => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [amount, setAmount] = useState("");
    const titleChangeHandler = (e) => {
        setTitle(e.target.value);
    }
    const amtChangeHandler = (e) => {
        setAmount(e.target.value);
    }
    const dateChangeHandler = (e) => {
        setDate(new Date(e.target.value));
    }

    console.log(props);

    const submitForm = (e) => {
        e.preventDefault();
        if (title && amount && date) {
            props.updateExpenses([{
                title: title,
                amount: amount,
                date: date
            }, ...props.expenses]);
            setTitle("");
            setAmount("");
        }
        else {
            alert("Fill all details!")
        }
    }
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={title} onChange={(e)=>titleChangeHandler(e) }/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={amount} onChange={(e)=>amtChangeHandler(e) }/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date"  onChange={(e) => dateChangeHandler(e)}   />
                </div>
                <div className="new-expense__actions">
                    <button type="submit" onClick={e=>submitForm(e)}>Add Expense</button>
                </div>
                 
            </div>
        </form>
    )
}

export default ExpenseForm