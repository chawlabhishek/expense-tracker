import React, { useState } from "react";
import Card from "../UI/Card";
import "../../css/Expenses/Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "../Expenses/ExpensesChart"
const Expenses = (props) => {
  const [filteredYear, setSelectedYear] = useState("2021");

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const filterChangeHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  return (
    <li>
      <div>
        <Card className="expenses">
          <ExpensesFilter
            selectedYear={filteredYear}
            onChangeFilter={filterChangeHandler}
          />
          <ExpensesChart expenses={filteredExpenses}/>
          <ExpensesList filteredExpenses={filteredExpenses} />
        </Card>
      </div>
    </li>
  );
};

export default Expenses;
