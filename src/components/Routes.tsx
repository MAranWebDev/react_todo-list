import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages";
import TodoClient from "../pages/todo-client";
import NotFound from "../pages/404";

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route component={Home} path="/" exact />
			<Route component={TodoClient} path="/todo-client" exact />
			<Route component={NotFound} />
		</Switch>
	</BrowserRouter>
);

export default Routes;
