import "../TodoInputBar/todoInputBar.css"
import { AddIcon } from "../icons/AddIcon";

interface TodoInputBarProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}


export const TodoInputBar = (props: TodoInputBarProps): JSX.Element => {
  const { onChange, value } = props
  return (
    <div className="todo-input-container">
      <span className="todo-input-icon">
        <AddIcon />
      </span>
      <input
        value={value}
        onChange={onChange}
        className="todo-input"
        type="text"
        placeholder="Type your task"
      />
    </div>
  );
};
