import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import './Expenses.css';

const Expenses = (props) => {
  const { expenses } = props;
  const [selectedFilter, setSelectedFilter] = useState('2020');

  const selectedExpenseFilter = (selectedData) => {
    setSelectedFilter(selectedData)
    // console.log(selectedFilter);
  }

  const filteredExpenses = expenses.filter(e => {
    return e.date.getFullYear().toString() === selectedFilter;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYear={selectedFilter} onSelectExpensesFilter={selectedExpenseFilter} />
        {filteredExpenses.map((expense, index) => {
          return (
            <ExpenseItem
              key={expense.id}
              date={expense.date}
              title={expense.name}
              amount={expense.amount}
              currency={expense.currency}
              className={`item-${index+1}`}
            />
          )
        })}
      </Card>
    </div>
  )
}

export default Expenses;