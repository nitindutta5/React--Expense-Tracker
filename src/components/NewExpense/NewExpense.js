import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
    return (
        <div className="new-expense">
            <ExpenseForm updateExpenses={props.updateExpenses} expenses={props.expenses}/>
        </div>
    );
}

export default NewExpense