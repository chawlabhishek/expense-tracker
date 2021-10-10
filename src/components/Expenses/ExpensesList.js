import React from "react";
import ExpenseItem from "./ExpenseItem";
import { v4 as uuidv4 } from "uuid";
import "../../css/Expenses/ExpensesList.css";

const ExpensesList = (props) => {
  let expensesContent = <h2 className='expenses-list__fallback'>No Expenses Found.</h2>;

  if (props.filteredExpenses.length === 0) {
    return expensesContent;
  }

  return (
    <ul className="expenses-list">
      {props.filteredExpenses.map((expense) => (
        <ExpenseItem
          key={uuidv4()}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      ;
    </ul>
  );
};

export default ExpensesList;
