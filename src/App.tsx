import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { TaskifyState } from "./context/Context";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const { state, dispatch } = TaskifyState();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo) {
      dispatch({ type: "add", payload: todo });
    }
    setTodo("");
  };

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
      <TodoList listTodo={state} />
    </div>
  );
};

export default App;
