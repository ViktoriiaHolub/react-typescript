import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../interfaces/models";
import { AiFillEdit, AiFillDelete, AiOutlineCheck } from "react-icons/ai";
import "./styles.css";
import { TaskifyState } from "../context/Context";
import { Draggable } from "react-beautiful-dnd";

interface Props {
  todo: Todo;
  index: number;
}

const SingleTodo = ({ todo, index }: Props) => {
  const [isEditActive, setIsEditActive] = useState<boolean>(false);
  const [inputValue, setIsInputValue] = useState<string>(todo.task);
  const inputRef = useRef<HTMLInputElement>(null);

  const { state, dispatch } = TaskifyState();

  const handleDone = (id: number) => {
    dispatch({ type: "done", payload: id });
  };

  const removeTodo = (id: number) => {
    dispatch({ type: "remove", payload: id });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, id: number) => {
    e.preventDefault();
    dispatch({ type: "edit", payload: { id, inputValue } });

    setIsEditActive(false);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [isEditActive]);

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided, snapshot) => (
        <form
          className={`todos__single ${snapshot.isDragging ? 'drag': ''}`}
          onSubmit={(e) => handleSubmit(e, todo.id)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
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
      )}
    </Draggable>
  );
};

export default SingleTodo;
