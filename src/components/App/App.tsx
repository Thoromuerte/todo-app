import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { AddIcon } from "../icons/AddIcon";

export function App() {
  return (
    <div className="App">
      <form className="todo-app">
        <div className="app-menu">
          <div className="menu-top-lane">
            <span className="date-day">
              <strong>Wednesday,</strong> 4
            </span>
            <span className="counter">X Tasks</span>
          </div>
          <div className="menu-bottom-lane">
            <span className="date-month">August</span>
            <button className="button" type="button">
              CLEAR LIST
            </button>
          </div>
          <div className="menu-filters">
            <button className="button">All</button>
            <button className="button">Active</button>
            <button className="button">Completed</button>
          </div>
        </div>
        <div className="todo-input-container">
          <span className="todo-input-icon">
            <AddIcon />
          </span>
          <input
            className="todo-input"
            type="text"
            placeholder="Type your task"
          />
        </div>
        <div className="todo-list-item">
          <input className="checkbox" type="checkbox" />
          <span className="item-text">Do some shit</span>
          <span className="item-date">4:20</span>
          <button className="button" type="button">
            DELETE
          </button>
        </div>
      </form>
    </div>
  );
}
