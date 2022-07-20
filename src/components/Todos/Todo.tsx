import type { TodoTypes } from "./types";
import { useContext } from "react";
import { TodosContext } from "./TodosContext";

const Todo = ({ id, name, completed }: TodoTypes) => {
  const { setEditId, setEdit, setTodos, todos } = useContext(TodosContext);

  const handleCheck = () => {
    const newTodos = [...todos].map((todo) => {
      if (todo.id === id) todo.completed = !todo.completed;
      return todo;
    });
    setTodos(newTodos);
  };

  const editTodo = () => {
    setEditId(id);
    setEdit(name);
  };

  const deleteTodo = () =>
    setTodos([...todos].filter((todo) => todo.id !== id));

  return (
    <div
      className={`${
        completed ? "alert-success" : "alert-warning"
      } alert row justify-content-between`}
    >
      <div className="col-auto d-flex gap-3 align-items-center">
        <p className="m-0">{completed ? <s>{name}</s> : <span>{name}</span>}</p>
        <input
          type="checkbox"
          className="form-check-input"
          checked={completed}
          onChange={handleCheck}
        />
      </div>

      <div className="col-auto d-flex gap-3">
        {!completed && (
          <button className="btn btn-outline-warning" onClick={editTodo}>
            Edit
          </button>
        )}
        <button className="btn btn-outline-danger" onClick={deleteTodo}>
          Delete
        </button>
      </div>
    </div>
  );
};

export { Todo };
