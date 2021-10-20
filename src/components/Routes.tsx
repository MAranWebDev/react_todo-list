import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages";
import TodoList from "../pages/todo-list";
import NotFound from "../pages/404";

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route component={Home} path="/" exact />
			<Route component={TodoList} path="/todo-list" exact />
			<Route component={NotFound} />
		</Switch>
	</BrowserRouter>
);

export default Routes;
