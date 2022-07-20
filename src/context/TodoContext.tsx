import {
  type PropsWithChildren,
  useState,
  useEffect,
  createContext,
} from "react";

type TodoType = { id: string; name: string; completed: boolean };

type ContextType = {
  todos: TodoType[];
  setTodos: (value: TodoType[]) => void;
  editId: string;
  setEditId: (value: string) => void;
  edit: string;
  setEdit: (value: string) => void;
};

const defaultContextValues = {
  todos: [],
  setTodos: () => {},
  editId: "",
  setEditId: () => {},
  edit: "",
  setEdit: () => {},
};

const TodoContext = createContext<ContextType>(defaultContextValues);

const TodoProvider = ({ children }: PropsWithChildren) => {
  const [todos, setTodos] = useState<TodoType[]>([]);
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
    <TodoContext.Provider
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
    </TodoContext.Provider>
  );
};

export { type TodoType, TodoContext, TodoProvider };
