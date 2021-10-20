import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/index";

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route component={Home} path="/" exact />
		</Switch>
	</BrowserRouter>
);

export default Routes;
