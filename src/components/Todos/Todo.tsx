import { useContext, useState } from "react";
import { TodoContext } from "../../context/TodoContext";

type TodoType = { id: number; todo: string; completed: boolean };

const Todo = ({ id, todo, completed }: TodoType) => {
  const { deleteTodo, updateTodo, editId, setEditId } = useContext(TodoContext);
  const [editTodo, setEditTodo] = useState(todo);

  const classDisabled = completed
    ? "btn-outline-light disabled"
    : "btn-outline-warning";

  const handleUpdate = () => {
    const newTodo = editTodo.trim();
    setEditId(0);
    if (newTodo !== "") updateTodo({ id, todo: newTodo, completed });
    setEditTodo(todo);
  };

  return (
    <tr className="align-middle">
      <td>
        {editId !== id ? (
          todo
        ) : (
          <input
            type="text"
            value={editTodo}
            onChange={(event) => setEditTodo(event.target.value)}
          />
        )}
      </td>
      <td>
        {editId !== id ? (
          <button
            className={`btn ${classDisabled}`}
            onClick={() => setEditId(id)}
          >
            Edit
          </button>
        ) : (
          <button className="btn btn-success" onClick={handleUpdate}>
            Update
          </button>
        )}
      </td>
      <td>
        <button
          className="btn btn-outline-danger"
          onClick={() => deleteTodo(id)}
        >
          Delete
        </button>
      </td>
      <td>
        <input
          type="checkbox"
          className="form-check-input"
          checked={completed}
          onChange={() => updateTodo({ id, todo, completed: !completed })}
          disabled={editId === id ? true : false}
        />
      </td>
    </tr>
  );
};

export { Todo };
