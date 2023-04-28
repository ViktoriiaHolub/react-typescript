import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./interfaces/models";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [listTodo, setListTodo] = useState<Todo[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo) {
      setListTodo([...listTodo, { id: Date.now(), task: todo, isDone: false }]);
    }
    setTodo("");
  };

  console.log("listTodo", listTodo);
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
      <TodoList listTodo={listTodo} setListTodo={setListTodo} todo={todo} />
    </div>
  );
};

export default App;
