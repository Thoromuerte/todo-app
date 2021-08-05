import * as React from "react";

import { AppMenu } from "../AppMenu/AppMenu";
import { Todo, TodoItem } from "../TodoItem/TodoItem";
import { TodoInputBar } from "../TodoInputBar/TodoInputBar";

import { readFromLocalStorage, saveToLocalStorage } from "../../utilities/storage";

import "./App.css";

export function App(): JSX.Element {
  const [todoList, setTodoList] = React.useState<Todo[]>(readFromLocalStorage("todos") ?? []);
  const [text, setText] = React.useState("");
  const [filter, setFilter] = React.useState(readFromLocalStorage("filter") ?? "all");


  React.useEffect(() => {
    saveToLocalStorage("todos", JSON.stringify(todoList));
  }, [todoList]);

  React.useEffect(() => {
    saveToLocalStorage("filter", filter);
  }, [filter]);

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
      createdAt: new Date(),
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
          createdAt: item.createdAt,
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

  const getFilteredTodos = (filterName: string) => {
    if (filterName === "active") {
      return todoList.filter((todo) => todo.completed === false);
    }

    if (filterName === "completed") {
      return todoList.filter((todo) => todo.completed === true);
    }

    return todoList;
  };

  return (
    <div className="App">
      <form className="todo-app" onSubmit={addTodo}>
        <AppMenu
          onClear={clearTodo}
          undoneTodoCount={undoneTodo.length}
          filterName={filter}
          onFilterChange={(filterName) => setFilter(filterName)}
        />
        <TodoInputBar onChange={changeText} value={text}/>
        <div className="todo-list">
          {getFilteredTodos(filter).map((todo, index) => (
            <TodoItem todo={todo} onToggle={toggleTodo} onDelete={deleteTodo} />
          ))}
        </div>
      </form>
    </div>
  );
}
