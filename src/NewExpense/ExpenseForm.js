import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm=()=>{
    const[entertitle,setEnteredTitle]=useState(' ');
    const[enterAmount,setEnetrAmount]=useState(' ');
    const [enterDate,setEnterDate]=useState(' ');

    const TitleHandler=(event)=>{
        setEnteredTitle(event.target.value)
    }
    const AmountHandler=(event)=>{
        setEnetrAmount(event.target.value)
    }
   const DateHandler=(event)=>{
    setEnterDate(event.target.value)
   }
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={TitleHandler}></input>
                </div>
                <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" onChange={AmountHandler}></input>
                </div>
                <div className="new-expense__control">
                <label>Date</label>
                <input type="date" onChange={DateHandler}></input>
                </div>
            </div>
           <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
           </div>
        </form>
    )
}
export default ExpenseForm;