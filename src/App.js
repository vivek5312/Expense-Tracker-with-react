/* import React,  { useState } from "react";
import ExpenseItem from "./Components/Expenses/ExpenseItem";
import NewExpenses from "./NewExpense/NewExpenses";
import ExpensesFilter from "./Components/Expenses/ExpensesFilter"; 




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
    const[FilteredYear,setFilter]=useState('2023');

    const handleFilterChange=(selectedYear)=>{
      setFilter(selectedYear);
    }; 

    const filteredExpense=props.item.filter(expense=>{
      return expense.date.getfullyear().toString()===FilteredYear
    })

/*     
  const expenseItem=[];
  for(let i=0;i<Expense.length;i++){
    expenseItem.push(

      
    <ExpenseItem
     key={Expense[i].id} 
     title={Expense[i].title} 
     amount={Expense[i].amount} 
     date={Expense[i].date}/*  location={Expense[i].location} */

 
 

 

/*   return (
    <div className="App">
    
     <NewExpenses onAddExpense={AddExpenseHandler}></NewExpenses>
     <ExpensesFilter value={FilteredYear} onChangeFilter={handleFilterChange} />

     {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.location}
        />
      ))}
  
    
     
    </div>
  );
}

export default App; */
import React, { useState } from "react";
import ExpenseItem from "./Components/Expenses/ExpenseItem";
import NewExpenses from "./NewExpense/NewExpenses";
import ExpensesFilter from "./Components/Expenses/ExpensesFilter";

const Dummyexpense = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 2000,
    date: new Date(2023, 7, 6),
    location: "Kadodara",
  },
  {
    id: "e2",
    title: "T.V",
    amount: 10000,
    date: new Date(2023, 7, 6),
    location: "Gangadhara",
  },
  {
    id: "e3",
    title: "Mobile",
    amount: 15000,
    date: new Date(2023, 7, 7),
    location: "Surat",
  },
  {
    id: "e4",
    title: "Watch",
    amount: 1500,
    date: new Date(2023, 7, 8),
    location: "Sachin",
  },
  {
    id: "e5",
    title: "Bike",
    amount: 1500,
    date: new Date(2023, 7, 8),
    location: "Kadodra",
  },
];

function App(props) {
  const [expenses, setExpenses] = useState(Dummyexpense);
  const addExpenseHandler = (expenseData) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expenseData];
    });
  };

  const [filteredYear, setFilteredYear] = useState('2023');

  const handleFilterChange = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="App">
      <NewExpenses onAddExpense={addExpenseHandler} />
      <ExpensesFilter selected={filteredYear} onChangeFilter={handleFilterChange} />

      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.location}
        />
      ))}
    </div>
  );
}

export default App;
