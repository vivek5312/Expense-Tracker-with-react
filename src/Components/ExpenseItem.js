import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

import "./Expense.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);
  console.log("expense item is excuted");
  const ClickHandler = () => {
    setTitle("Updated");
    console.log(title);
  };

  const ChangeExpense = () => {
    setAmount(100);
  };
  return (
    <div className="Expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails amount={amount} location={props.location} title={title} />
      <button className="change-Title" onClick={ClickHandler}>
        Change Title
      </button>
      <button className="delbtn" onClick={ChangeExpense}>
        Change-Expense
      </button>
    </div>
  );
};
export default ExpenseItem;
