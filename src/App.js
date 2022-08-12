import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      name: 'Toilet Paper',
      date: new Date('2022, 1, 10'),
      amount: 46,
      currency: '$'
    },
    {
      id: 'e2',
      name: 'Car Insurance',
      date: new Date('2022, 2, 15'),
      amount: 59,
      currency: '$'
    },
    {
      id: 'e3',
      name: 'New Desk (Wooden)',
      date: new Date('2022, 3, 18'),
      amount: 168,
      currency: '$'
    },
    {
      id: 'e4',
      name: 'Car service',
      date: new Date('2022, 4, 07'),
      amount: 86,
      currency: '$'
    }
  ];

  const addExpenseHandler = (expense) => {
    expenses.push({
      ...expense,
      currency: '$'
    });
    console.log('An Expense: ', expense)
    console.log(expenses);
  }
  console.log(expenses);
  return (
    <div className="App">
      <h1>React complete guide</h1>
      <NewExpense expenseData={addExpenseHandler} />
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
