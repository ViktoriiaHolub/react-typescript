import React from "react";
import { Todo } from "../interfaces/models";
import "./styles.css";
import SingleTodo from "./SingleTodo";

interface Props {
  listTodo: Todo[];
  setListTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
  todo: string;
}

const TodoList = ({ listTodo, setListTodo, todo }: Props) => {
  return (
    <div className="todos">
      {listTodo.map((todo: Todo) => (
        <SingleTodo todo={todo} listTodo={listTodo} setListTodo={setListTodo} />
      ))}
    </div>
  );
};

export default TodoList;
