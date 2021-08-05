import { getTodoDate } from "../../utilities/date";

import "./todoItem.css"

export interface Todo {
  text: string;
  completed: boolean;
  createdAt: Date;
}

interface TodoItemProps {
  todo: Todo;
  onToggle: (todo: Todo) => void;
  onDelete: (todo: Todo) => void;
}

export const TodoItem = (props: TodoItemProps): JSX.Element => {
  const { todo, onToggle, onDelete } = props;

  return (
    <div className="todo-list-item">
      <input
        className="checkbox"
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo)}
      />
      <span className={`item-text ${todo.completed ? "item-text-done" : ""}`}>
        {todo.text}
      </span>
      <span className="item-date">{getTodoDate(todo.createdAt)}</span>
      <button
        className="button button--small"
        type="button"
        onClick={() => onDelete(todo)}
      >
        DELETE
      </button>
    </div>
  );
};
