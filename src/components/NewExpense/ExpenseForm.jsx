import React, { useState } from "react";
import "./ExpenseFrom.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const AmountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const DateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseDate = {
      title: enteredTitle,
      amount: enteredAmount,
      Date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseDate);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <lable>Title</lable>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <lable>Amount</lable>
          <input type="number" min={1000} step={1000} value={enteredAmount} onChange={AmountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <lable>Date</lable>
          <input type="date" min="2019-01=02" max="2022-12-31" value={enteredDate} onChange={DateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
