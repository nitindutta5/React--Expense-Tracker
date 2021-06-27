import ExpenseItem from './ExpenseItem/ExpenseItem'
import './Expenses.css'

const Expenses = (props) => {
    console.log(props);
    return (
        <div className="expenses">
            {
                props.data.map((obj,id) =>(
                    <ExpenseItem data={props.data} updateExpenses={props.updateExpenses} updatekey={id} uniqueId={id} title={obj.title} amount={obj.amount} date={obj.date} />
                ))
            }
        </div>
    )
}

export default Expenses