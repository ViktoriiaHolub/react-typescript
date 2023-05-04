import { Todo } from "../interfaces/models";

type Actions =
  | { type: "add"; payload: string }
  | { type: "remove"; payload: number }
  | { type: "done"; payload: number }
  | { type: "edit"; payload: { id: number; inputValue: string } };

export const TodoReducer = (state: Todo[], action: Actions) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        { id: Date.now(), task: action.payload, isDone: false },
      ];
    case "remove":
      let nState = state.filter((todo) => {
        return todo.id !== action.payload;
      });
      return nState;
    case "done":
      return state.map((todo) => {
        return todo.id === action.payload
          ? { ...todo, isDone: !todo.isDone }
          : todo;
      });
    case "edit":
      return state.map((todo) => {
        return todo.id === action.payload.id
          ? { ...todo, task: action.payload.inputValue }
          : todo;
      });
    default:
      return state;
  }
};
