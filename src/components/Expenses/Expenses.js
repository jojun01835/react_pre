import React, { useState } from "react";
import ExpenselItem from "./ExpenselItem";
import "./Expenses.css";
import Card from "../UI/Card";
import "./ExpensesFilter.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpenselItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}></ExpenselItem>
      <ExpenselItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}></ExpenselItem>
      <ExpenselItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}></ExpenselItem>
      <ExpenselItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}></ExpenselItem>
    </Card>
  );
};
export default Expenses;
