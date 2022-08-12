import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import './Expenses.css';

const Expenses = (props) => {
  const { expenses } = props;
  const selectedExpenseFilter = (selectedData) => {
    console.log('Selected Filter: ', selectedData);
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onSelectExpensesFilter={selectedExpenseFilter} />
        {expenses.map((expense, index) => {
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