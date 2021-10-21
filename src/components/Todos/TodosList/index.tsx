import { useContext } from "react";
import { TodosContext } from "../TodosContext";
import EditTodo from "./EditTodo";
import Todo from "./Todo";
import NoTodo from "./NoTodo";

const TodosList = () => {
	const { todos, editId } = useContext(TodosContext);

	return (
		<section>
			{todos.length > 0 ? (
				todos.map(({ id, name, completed }) => (
					<article key={id}>
						{editId === id ? (
							<EditTodo id={id} />
						) : (
							<Todo id={id} name={name} completed={completed} />
						)}
					</article>
				))
			) : (
				<NoTodo />
			)}
		</section>
	);
};

export default TodosList;
