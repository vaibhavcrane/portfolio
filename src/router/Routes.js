import React from "react";
import Home from "../components/Home";
import NotFound from "../components/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Routes = () => {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route component={NotFound} />
				</Switch>
			</Router>
		</>
	);
};

export default Routes;
