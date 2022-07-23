import { type PropsWithChildren, createContext, useState } from "react";
import { type UseTodoType, useTodo } from "../hooks/useTodo";

type TodoContextType = UseTodoType & {
  editId: number;
  setEditId: (id: number) => void;
};

const TodoContext = createContext<TodoContextType>(undefined!);

const TodoProvider = ({ children }: PropsWithChildren) => {
  const hook = useTodo();
  const [editId, setEditId] = useState(0);

  return (
    <TodoContext.Provider value={{ ...hook, editId, setEditId }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
