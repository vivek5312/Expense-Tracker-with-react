import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

import "./Expense.css";

function ExpenseItem(props) {
  return (
    <div className="Expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        amount={props.amount}
        location={props.location}
        title={props.title}
      />
    </div>
  );
}
export default ExpenseItem;
