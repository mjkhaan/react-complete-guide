import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const { date, title, currency, amount } = props;
  const classes = "expense-item " + props.className;
  return (
    <div className={classes}>
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{currency}{amount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem;