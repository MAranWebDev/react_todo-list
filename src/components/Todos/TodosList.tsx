import { useContext } from "react";
import { TodosContext } from "./TodosContext";
import { EditTodo } from "./EditTodo";
import { Todo } from "./Todo";
import { NoTodo } from "./NoTodo";

const TodosList = () => {
  const { todos, editId } = useContext(TodosContext);

  return (
    <section>
      {todos.length > 0 ? (
        todos.map((el) => (
          <article key={el.id}>
            {editId === el.id ? <EditTodo id={el.id} /> : <Todo {...el} />}
          </article>
        ))
      ) : (
        <NoTodo />
      )}
    </section>
  );
};

export { TodosList };
