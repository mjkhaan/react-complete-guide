import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const { date, title, currency, amount } = props;

  const classes = "expense-item " + props.className;

  const clickHandler = () => {
    console.log('Clicked!')
  }

  return (
    <div className={classes}>
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{currency}{amount}</div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </div>
  )
}

export default ExpenseItem;