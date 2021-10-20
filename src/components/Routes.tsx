import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages";
import About from "../pages/about";
import NotFound from "../pages/404";

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route component={Home} path="/" exact />
			<Route component={About} path="/about" exact />
			<Route component={NotFound} />
		</Switch>
	</BrowserRouter>
);

export default Routes;
