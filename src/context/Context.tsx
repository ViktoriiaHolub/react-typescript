import React, { useContext, useReducer } from "react";
import { createContext } from "react";
import { Todo } from "../interfaces/models";
import { TodoReducer } from "./Reducers";

const Taskify = createContext<any>(null);
const Context: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const listTodo: Todo[] = [];

  const [state, dispatch] = useReducer(TodoReducer, listTodo);
  // Todo change name
  return <Taskify.Provider value={{ state, dispatch }}>{children}</Taskify.Provider>;
};

export default Context;

export const TaskifyState = () => {
  return useContext(Taskify);
};
