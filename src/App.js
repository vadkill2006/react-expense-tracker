import {Typography, makeStyles, Box} from '@material-ui/core';
import {useState, useEffect} from 'react'
import './App.css';
import Balance from './component/Balance';
import ExpenseCard from './component/ExpenseCard';
import NewTransactions from './component/NewTransactions'
import Transactions from './component/Transactions'

const useStyle = makeStyles({
  header:{
    color: 'blue',
    fontSize: 35,
    margin: '10px 0',
    textTransform: 'uppercase',
  },
  component:{
    background:'#fff',
    width: 800,
    borderRadius: 20,
    padding: 10,
    display: 'flex',
    '& > *': {
      width:'50%',
      padding: 10,
      height: '70vh',
    },
  },
  
})

const getTransaction = () =>{
    let transaction = localStorage.getItem('Transactions');
    console.log(transaction);
    if(transaction) {
      return JSON.parse(localStorage.getItem('Transactions'));
    }else{
      return []
    }

}

function App() {
  const classes = useStyle();
  const [transactions, setTransaction] = useState(
    // {id:1, text:'Momos', amount: -20},
    // {id:2, text:'Salary', amount: 3000},
    // {id:3, text:'Book', amount: -100},
    // {id:4, text:'Bonus', amount: 1500},
    getTransaction()
  )

  const deleteTransaction = (id) =>{
    setTransaction(transactions.filter(transaction => transaction.id !== id))
  }

  const addTransaction = (transaction) =>{
    setTransaction(transactions => [transaction, ...transactions])
  }

  useEffect(() => {
    localStorage.setItem('Transactions', JSON.stringify(transactions))
  }, [transactions]);
  return (
    <div className="App">
      <Typography className={classes.header}>Expense Tracker</Typography>
      <Box className={classes.component}>
        <Box>
          <Balance transactions={transactions}/>
          <ExpenseCard transactions={transactions}/>
          <NewTransactions addTransaction={addTransaction}/>
        </Box>
        <Box>
          <Transactions transactions={transactions} deleteTransaction={deleteTransaction}/>
        </Box>
      </Box>
    </div>
  );
}

export default App;
