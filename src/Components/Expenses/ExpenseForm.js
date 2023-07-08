import React, { useState } from "react";

const ExpenseForm = () => {
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseDate, setExpenseDate] = useState("");

  const ExpenseNameChange = (event) => {
    setExpenseName(event.target.value);
  };

  const ExpenseAmountChange = (event) => {
    setExpenseAmount(event.target.value);
  };

  const ExpenseDateChange = (event) => {
    setExpenseDate(event.target.value);
  };

  const FormSubmit = (event) => {
    event.preventDefault();
    console.log("Expense Name:", expenseName);
    console.log("Expense Amount:", expenseAmount);
    console.log("Expense Date:", expenseDate);
  };
  return (
    <form onSubmit={FormSubmit}>
      <div>
        <label htmlFor="expenseName">Expense Name:</label>
        <input
          type="text"
          id="expenseName"
          value={expenseName}
          onChange={ExpenseNameChange}
        />
      </div>
      <div>
        <label htmlFor="expenseAmount">Expense Amount:</label>
        <input
          type="number"
          id="expenseAmount"
          value={expenseAmount}
          onChange={ExpenseAmountChange}
        />
      </div>
      <div>
        <label htmlFor="expenseDate">Expense Date:</label>
        <input
          type="date"
          id="expenseDate"
          value={expenseDate}
          onChange={ExpenseDateChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
export default ExpenseForm;
