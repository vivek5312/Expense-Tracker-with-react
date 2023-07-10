import { useState } from "react";
import NewExpenses from "./NewExpense/NewExpenses";
import ExpenseItem from "./Components/Expenses/ExpenseItem";





   const Dummyexpense = [
    {
      id: "e1",
      title: "Car Insurance",
      amount:2000,
      date: new Date(2023, 7, 6),
      location: "Kadodara",
    },
    {
      id: "e2",
      title:"T.V",
      amount:10000,
      date: new Date(2023, 7, 6),
      location: "Gangadhara",
    },
    {
      id: "e3",
      title: "Mobile",
      amount:15000,
      date: new Date(2023, 7, 7),
      location: "Surat",
    },
    {
      id: "e4",
      title: "Watch",
      amount:1500,
      date: new Date(2023, 7, 8),
      location: "Sachin",
    },
    {
      id: "e5",
      title: "Bike",
      amount:1500,
      date: new Date(2023, 7, 8),
      location:"Kadodra",
    }
  ];
 
  function App(props) {
    const [Expense,setExpense]=useState(Dummyexpense);
    const AddExpenseHandler = (expenseData) => {
      setExpense((prevExpenses) => {
        return [...prevExpenses, expenseData];
      });
    };
  
  const expenseItem=[];
  for(let i=0;i<Expense.length;i++){
    expenseItem.push(
    <ExpenseItem key={Expense[i].id} title={Expense[i].title} amount={Expense[i].amount} date={Expense[i].date} location={Expense[i].location}></ExpenseItem>
  )}

 

  return (
    <div className="App">

     <NewExpenses onAddExpense={AddExpenseHandler}></NewExpenses>
    
     {expenseItem}  
    
     
    </div>
  );
}

export default App;