import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages";
import TodoClient from "../pages/todo-client";
import NotFound from "../pages/404";

const Router = () => (
	<BrowserRouter>
		<Routes>
			<Route element={<Home />} path="/" />
			<Route element={<TodoClient />} path="/todo-client" />
			<Route element={<NotFound />} />
		</Routes>
	</BrowserRouter>
);

export default Router;
