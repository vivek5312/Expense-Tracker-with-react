import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

import "./Expense.css";

const ExpenseItem=(props) =>{
const ClickHandler=()=>{
  console.log("cliked")
}
  return (
    
    <div className="Expense-item">
      <ExpenseDate date={props.date}/>
      <ExpenseDetails amount={props.amount} location={props.location} title={props.title}/>
      <button className="change-Title" onClick={ClickHandler}>Change Title</button>
      <button className="delbtn" >Delete Expense</button>

    </div>

  );
}
export default ExpenseItem;
