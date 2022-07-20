import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import { TodoClient } from "./pages/TodoClient";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="todo-client" element={<TodoClient />} />
      </Routes>
    </BrowserRouter>
  );
};
export { App };
