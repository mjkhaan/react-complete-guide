import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // })

  const changeTitleHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // })
    // setUserInput(prevState => {
    //   return { ...prevState, enteredTitle: event.target.value }
    // })
    setEnteredTitle(event.target.value);
    // console.log(enteredTitle);
  }

  const changeAmountHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value
    // })
    // setUserInput(prevState => {
    //   return { ...prevState, enteredAmount: event.target.value }
    // })
    setEnteredAmount(event.target.value);
    // console.log(enteredAmount);
  }

  const changeDateHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value
    // })
    // setUserInput(prevState => {
    //   return { ...prevState, enteredDate: event.target.value }
    // })
    setEnteredDate(event.target.value);
    // console.log(enteredDate);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      name: enteredTitle,
      amount: Number(enteredAmount),
      date: new Date(enteredDate)
    }
    // console.log('Expense Data: ', expenseData);
    props.onSaveExpenseData(expenseData);
    props.formVisible(false);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  const onCancelHandler = () => {
    props.formVisible(false);
  }

  return <form onSubmit={submitHandler}>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" value={enteredTitle} onChange={changeTitleHandler} />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input type="number" value={enteredAmount} onChange={changeAmountHandler} />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={changeDateHandler} />
      </div>
    </div>
    <div className="new-expense__actions">
      <button type="button" onClick={onCancelHandler}>Cancel</button>
      <button type="submit">Add Expense</button>
    </div>
  </form>
}

export default ExpenseForm;