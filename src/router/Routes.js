import React from "react";
import Home from "../components/Home";
import NotFound from "../components/NotFound";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Blogspage from "../components/BlogsPage/BlogsPage";
import SingleBlogPage from "../components/singleblogpage/SingleBlogPage";

const Routes = () => {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exaact path='/#/all-blogs' component={Blogspage} />
					<Route path='/:slug' component={SingleBlogPage} />
					<Route component={NotFound} />
				</Switch>
			</Router>
		</>
	);
};

export default Routes;
