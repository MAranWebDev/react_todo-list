import {
  type PropsWithChildren,
  createContext,
  useState,
  useEffect,
} from "react";
import type { ContextTypes, TodoTypes } from "./types";

const defaultContextValues = {
  todos: [],
  setTodos: () => {},
  editId: "",
  setEditId: () => {},
  edit: "",
  setEdit: () => {},
};

const TodosContext = createContext<ContextTypes>(defaultContextValues);

const TodosProvider = ({ children }: PropsWithChildren) => {
  const [todos, setTodos] = useState<TodoTypes[]>([]);
  const [editId, setEditId] = useState("");
  const [edit, setEdit] = useState("");

  useEffect(() => {
    const temp = localStorage.getItem("todos");
    temp && setTodos(JSON.parse(temp));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify([...todos]));
  }, [todos]);

  return (
    <TodosContext.Provider
      value={{
        todos,
        setTodos,
        editId,
        setEditId,
        edit,
        setEdit,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export { TodosContext, TodosProvider };
