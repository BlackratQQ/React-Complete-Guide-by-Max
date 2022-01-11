import React from "react";
import "./ExpenseDate.css";

function ExpenseDate(props) {
  const day = props.date.toLocaleString("en-EU", { month: "long" });
  const month = props.date.toLocaleString("en-EU", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date_year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
