import { type FormEvent, useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { Body } from "../components/Layout/Body";
import { EditTodo } from "../components/Todos/EditTodo";
import { ShowTodo } from "../components/Todos/ShowTodo";

const Home = () => {
  const { todos, editId, setTodos } = useContext(TodoContext);
  const [todo, setTodo] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (todo.trim() === "") return;
    addTodo();
    setTodo("");
  };

  const addTodo = () => {
    const newTodo = {
      id: Date.now().toString(),
      name: todo.trim(),
      completed: false,
    };
    const newTodos = [...todos];
    newTodos.unshift(newTodo);
    setTodos(newTodos);
  };

  return (
    <Body title="Home">
      <main className="container my-5">
        <h1 className="mb-3">Todo Client</h1>

        <form onSubmit={handleSubmit} className="mb-3 row g-3">
          <div className="col-auto">
            <input
              type="text"
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

        <section>
          {todos.length ? (
            todos.map((el) => (
              <article key={el.id}>
                {editId === el.id ? (
                  <EditTodo id={el.id} />
                ) : (
                  <ShowTodo {...el} />
                )}
              </article>
            ))
          ) : (
            <article className="alert alert-dark">
              <p className="m-0">No tasks to complete! 😎</p>
            </article>
          )}
        </section>
      </main>
    </Body>
  );
};

export { Home };
