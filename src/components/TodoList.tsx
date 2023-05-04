import React from "react";
import { Todo } from "../interfaces/models";
import "./styles.css";
import SingleTodo from "./SingleTodo";

interface Props {
  listTodo: Todo[];
}

const TodoList = ({ listTodo }: Props) => {
  return (
    <div className="todos">
      {listTodo.map((todo: Todo) => (
        <SingleTodo todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
