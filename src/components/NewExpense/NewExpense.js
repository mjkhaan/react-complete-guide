import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
  const [formVisible, setFormVisible] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
      currency: '$',
    }
    props.expenseData(expenseData)
    console.log('New Expense => ', expenseData)
  }

  const formVisibleHandler = () => {
    setFormVisible(true);
  }
  return <div className="new-expense">
    { formVisible ?
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} formVisible={setFormVisible} />
    :
      <div className="new-expense__actions text-center">
        <button onClick={formVisibleHandler}>Add Expense</button>
      </div>
    }
  </div>
}

export default NewExpense;