import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { AddIcon } from "../icons/AddIcon";
import { AppMenu } from "../AppMenu";
import { Todo, TodoItem } from "../TodoItem";

export function App(): JSX.Element {
  const [todoList, setTodoList] = React.useState<Todo[]>([]);
  const [text, setText] = React.useState("");

  const changeText = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setText(event.currentTarget.value);
  };

  const addTodo = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (text === "") {
      return;
    }

    const newTodo: Todo = {
      text,
      completed: false,
    };

    const newTodoList = [newTodo, ...todoList];

    setTodoList(newTodoList);
    setText("");
  };

  const clearTodo = (): void => {
    setTodoList([]);
  };

  const toggleTodo = (todo: Todo): void => {
    const newTodoList = todoList.map((item) => {
      if (item === todo) {
        return {
          text: item.text,
          completed: !item.completed,
        };
      }
      return item;
    });
    setTodoList(newTodoList);
  };

  const undoneTodo = todoList.filter((item) => !item.completed);

  const deleteTodo = (todo: Todo): void => {
    const newTodoList = todoList.filter((item) => {
      if (item !== todo) {
        return true;
      }

      return false;
    });

    setTodoList(newTodoList);
  };

  return (
    <div className="App">
      <form className="todo-app" onSubmit={addTodo}>
        <AppMenu onClear={clearTodo} undoneTodoCount={undoneTodo.length} />
        <div className="todo-input-container">
          <span className="todo-input-icon">
            <AddIcon />
          </span>
          <input
            value={text}
            onChange={changeText}
            className="todo-input"
            type="text"
            placeholder="Type your task"
          />
        </div>
        <div className="todo-list">
          {todoList.map((todo, index) => (
            <TodoItem todo={todo} onToggle={toggleTodo} onDelete={deleteTodo} />
          ))}
        </div>
      </form>
    </div>
  );
}
