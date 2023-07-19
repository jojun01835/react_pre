import React, { useState } from "react";
import "./ExpenseFrom.css";
const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const [userInput, setUserInput] = useState({});

  const titleChangeHandler = (e) => {};

  const AmountChangeHandler = (e) => {};

  const DateChangeHandler = (e) => {};
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <lable>Title</lable>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <lable>Amount</lable>
          <input type="number" min={1000} step={1000} onChange={AmountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <lable>Date</lable>
          <input type="date" min="2019-01=02" max="2022-12-31" onChange={DateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
