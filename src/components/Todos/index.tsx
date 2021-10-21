import type { FormEvent } from "react";
import { useContext, useState } from "react";
import { TodosContext } from "./TodosContext";
import TodosProvider from "./TodosContext";
import TodosList from "./TodosList";

const Todos = () => {
	const { todos, setTodos } = useContext(TodosContext);
	const [todo, setTodo] = useState("");

	function handleSubmit(e: FormEvent) {
		e.preventDefault();
		if (todo.trim() === "") return;
		addTodo();
		setTodo("");
	}

	function addTodo() {
		const newTodo = {
			id: Date.now().toString(),
			name: todo.trim(),
			completed: false,
		};
		const newTodos = [...todos];
		newTodos.unshift(newTodo);
		setTodos(newTodos);
	}

	return (
		<>
			<form onSubmit={handleSubmit} className="mb-3 row g-3">
				<div className="col-auto">
					<input
						type="text"
						autoFocus
						className="form-control"
						value={todo}
						onChange={(e) => setTodo(e.target.value)}
					/>
				</div>
				<div className="col-auto">
					<button type="submit" className="btn btn-primary">
						Add Todo
					</button>
				</div>
			</form>

			<hr />

			<TodosList />
		</>
	);
};

const fn = () => (
	<TodosProvider>
		<Todos />
	</TodosProvider>
);

export default fn;
