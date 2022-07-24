import React, { useContext, useState } from "react";
import { TodoContext } from "../../context/TodoContext";

const AddTodo = () => {
  const { createTodo } = useContext(TodoContext);
  const [todo, setTodo] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newTodo = todo.trim();
    if (newTodo !== "") createTodo(newTodo);
    setTodo("");
  };

  return (
    <form className="d-flex justify-content-end" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new todo"
        className="me-3"
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
      />
      <input type="submit" className="btn btn-outline-dark" value="Add" />
    </form>
  );
};

export { AddTodo };
