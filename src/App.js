import { useState } from "react";
import NewExpenses from "./NewExpense/NewExpenses";
import ExpenseItem from "./Components/Expenses/ExpenseItem";

function App(props) {
  const [enterExpense,setExpense]=useState([]);
  const AddExpenseHandler = (expenseData) => {
    setExpense((prevExpenses) => {
      return [...prevExpenses, expenseData];
    });
  };

 /*  const expense = [
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
 */
 
  
  const expenseItem=[];
  for(let i=0;i<enterExpense.length;i++){
    expenseItem.push(
    <ExpenseItem title={enterExpense[i].title} amount={enterExpense[i].amount} date={enterExpense[i].date} location={enterExpense[i].location}></ExpenseItem>
  )}

 

  return (
    <div className="App">
     <NewExpenses onAddExpense={AddExpenseHandler}></NewExpenses>
     {expenseItem}  
    
     
    </div>
  );
}

export default App;