import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { Body } from "../components/Layout/Body";
import { AddTodo } from "../components/Todos/AddTodo";
import { Todo } from "../components/Todos/Todo";

const Home = () => {
  const { todos } = useContext(TodoContext);

  return (
    <Body title="Home">
      <section className="mb-3">
        <AddTodo />
      </section>

      <section>
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th scope="col">Todo</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
              <th scope="col">Check</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((el) => (
              <Todo key={el.id} {...el} />
            ))}
          </tbody>
        </table>
      </section>
    </Body>
  );
};

export { Home };
