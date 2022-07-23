import { useReducer } from "react";

type UseTodoType = {
  todos: TodoType[];
  createTodo: (todo: string) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (payload: TodoType) => void;
};

type ReducerActionType =
  | { type: "create"; payload: string }
  | { type: "delete"; payload: number }
  | { type: "update"; payload: TodoType };

type TodoType = { id: number; todo: string; completed: boolean };

const ACTION = {
  CREATE: "create" as "create",
  DELETE: "delete" as "delete",
  UPDATE: "update" as "update",
};

const todoReducer = (state: TodoType[], action: ReducerActionType) => {
  switch (action.type) {
    case ACTION.CREATE:
      return [
        ...state,
        { id: Date.now(), todo: action.payload, completed: false },
      ];
    case ACTION.DELETE:
      return state.filter(({ id }) => id !== action.payload);
    case ACTION.UPDATE:
      return state.map((el) => {
        if (el.id === action.payload.id) return { ...action.payload };
        return el;
      });
    default:
      return state;
  }
};

const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  const createTodo = (todo: string) =>
    dispatch({ type: ACTION.CREATE, payload: todo });

  const deleteTodo = (id: number) =>
    dispatch({ type: ACTION.DELETE, payload: id });

  const updateTodo = (payload: TodoType) =>
    dispatch({ type: ACTION.UPDATE, payload });

  return { todos, createTodo, deleteTodo, updateTodo };
};

export { type UseTodoType, useTodo };
