import { type PropsWithChildren, createContext, useState } from "react";
import { type UseTodoType, useTodo } from "../hooks/useTodo";

const TodoContext = createContext<UseTodoType>(undefined!);

const TodoProvider = ({ children }: PropsWithChildren) => {
  const value = useTodo();

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export { TodoContext, TodoProvider };
