import React from "react";
import ReactDOM from "react-dom/client";
import { TodoProvider } from "./context/TodoContext";
import { App } from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

const container = document.getElementById("root")!;
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>
);
