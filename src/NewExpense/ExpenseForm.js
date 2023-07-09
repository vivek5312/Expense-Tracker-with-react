import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm=(props)=>{
   const[entertitle,setEnteredTitle]=useState(' ');
    const[enterAmount,setEneteredAmount]=useState(' ');
    const [enterDate,setEnteredDate]=useState(' ');

 
/* const [userInput,setUserInput]=useState({
    entertitle:'',
    enterAmount:'',
    enterDate:'',
}); */
    const TitleHandler=(event)=>{
        setEnteredTitle(event.target.value)
      /* setUserInput({
        ...userInput,
        entertitle: event.target.value
      }) */
    /*   setUserInput((prevState)=>{
        return{...prevState,entertitle:event.target.value}
      }) */
    }
    const AmountHandler=(event)=>{
        setEneteredAmount(event.target.value);
       /*  etUserInput({
            ...userInput,
            enterAmount: event.target.value
          })s */
    }
   const DateHandler=(event)=>{
    setEnteredDate(event.target.value);
   /*  setUserInput({
        ...userInput,
        enterDate: event.target.value
      }) */
   }
   const SubmitHandler=(event)=>{
    event.preventDefault();
    const ExpenseData={
        title:entertitle,
        amount:enterAmount,
        date:new Date(enterDate),
    }
    props.onSaveExpenseData(ExpenseData)
   setEneteredAmount(' ');
   setEnteredDate(' ');
   setEnteredTitle(' ');
   
   }
    return (
        <form onSubmit={SubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                <label>Title</label>
                <input type="text"value={entertitle} onChange={TitleHandler}></input>
                </div>
                <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={enterAmount} onChange={AmountHandler}></input>
                </div>
                <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={enterDate} onChange={DateHandler}></input>
                </div>
            </div>
           <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
           </div>
        </form>
    )
}
export default ExpenseForm;