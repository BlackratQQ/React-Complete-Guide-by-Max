import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmout] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //const [userInput, setUserInput] = useState({
  //enteredTitle: "",
  //enteredAmount: "",
  //enteredDate: "",
  //});

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    //setUserInput({
    //...userInput,
    //enteredTitle: event.target.value,
    //});
    //setUserInput((prevState) => {
    //  return { ...prevState, enteredTitle: event.target.value };
    //});
  };

  const amountChangeHandler = (event) => {
    setEnteredAmout(event.target.value);
    //setUserInput({
    //...inputUser,
    //enteredAmount: event.target.value,
    //});
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    //setUserInput({
    //...userInput,
    //enteredDate: event.target.value,
    //});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    //Zde jsou data z useStatů
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    //Vyčistění inputů po kliknutí na submit BTN
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmout("");
    setEnteredDate("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="text"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="Date"
              value={enteredDate}
              min="2019-01-01"
              step="2022-12-31"
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expence__action">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
