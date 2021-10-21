import type { FC } from "react";
import type { ContextTypes, TodoTypes } from "./types";
import { createContext, useState, useEffect } from "react";

const defaultContextValues = {
	todos: [],
	setTodos: () => {},
	editId: "",
	setEditId: () => {},
	edit: "",
	setEdit: () => {},
};

const TodosContext = createContext<ContextTypes>(defaultContextValues);

const TodosProvider: FC = ({ children }) => {
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

export { TodosContext };
export default TodosProvider;
