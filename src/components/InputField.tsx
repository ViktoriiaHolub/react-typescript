import React, { useRef } from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

// variant 1. Props
// const InputField = ({todo, setTodo} : Props) => {
// variant 2
const InputField: React.FC<Props> = ({ todo, setTodo, handleSubmit }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleSubmit(e);
        inputRef.current?.blur();
        console.log("inp", inputRef.current?.value);
      }}
    >
      <input
        type="input"
        placeholder="Enter a task"
        value={todo}
        ref={inputRef}
        onChange={(e) => setTodo(e.target.value)}
        className="input__box"
      />
      <button className="input_submit" type="submit">
        GO
      </button>
    </form>
  );
};

export default InputField;
