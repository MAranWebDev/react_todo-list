import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";

type IdType = { id: string };

const EditTodo = ({ id }: IdType) => {
  const { todos, edit, setTodos, setEditId, setEdit } = useContext(TodoContext);

  const updateTodo = () => {
    const newTodos = [...todos].map((todo) => {
      if (todo.id === id) todo.name = edit;
      return todo;
    });
    setTodos(newTodos);
    setEditId("");
  };

  return (
    <div className="alert alert-warning row justify-content-between">
      <div className="col-auto">
        <input
          type="text"
          className="form-control"
          autoFocus
          value={edit}
          onChange={(e) => setEdit(e.target.value)}
        />
      </div>

      <div className="col-auto d-flex gap-3">
        <button className="btn btn-outline-primary" onClick={updateTodo}>
          Update
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={() => setEditId("")}
        >
          Exit
        </button>
      </div>
    </div>
  );
};

export { EditTodo };
