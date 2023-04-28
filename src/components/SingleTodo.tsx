import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../interfaces/models";
import { AiFillEdit, AiFillDelete, AiOutlineCheck } from "react-icons/ai";
import "./styles.css";

interface Props {
  listTodo: Todo[];
  setListTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
  todo: Todo;
}

const SingleTodo = ({ todo, listTodo, setListTodo }: Props) => {
  const [isEditActive, setIsEditActive] = useState<boolean>(false);
  const [inputValue, setIsInputValue] = useState<string>(todo.task);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDone = (id: number) => {
    setListTodo(
      listTodo.map((todo) => {
        return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo;
      })
    );
  };

  const removeTodo = (id: number) => {
    setListTodo(
      listTodo.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, id: number) => {
    e.preventDefault();
    setListTodo(
      listTodo.map((todo) => {
        // variant 1
        // if (todo.id === id) {
        //   return { ...todo, task: inputValue };
        // } else {
        //   return todo;
        // }
        // variant 2
        return todo.id === id ? { ...todo, task: inputValue } : todo;
      })
    );
    setIsEditActive(false);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [isEditActive]);

  return (
    <form className="todos__single" onSubmit={(e) => handleSubmit(e, todo.id)}>
      {isEditActive ? (
        <input
          ref={inputRef}
          className="todos__single--text"
          value={inputValue}
          onChange={(e) => setIsInputValue(e.target.value)}
        ></input>
      ) : (
        <p className="todos__single--text">
          {todo.isDone ? <s>{inputValue}</s> : <>{inputValue}</>}
        </p>
      )}

      <div className="todos-icons">
        <span
          className="icon"
          onClick={() => {
            if (!todo.isDone) {
              setIsEditActive(true);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => removeTodo(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <AiOutlineCheck />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
