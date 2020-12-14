import React, { Fragment } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from "./PortfolioBodyComponent/WelcomeComponent/Welcome";
import Experience from "./PortfolioBodyComponent/ExperienceComponent/Experience";
import ProjectDone from "./PortfolioBodyComponent/ProjectDoneComponent/ProjectDone";
import CV from "./PortfolioBodyComponent/CVComponent/CV";
import Research from "./PortfolioBodyComponent/ResearchComponent/Research";
import Article from "./PortfolioBodyComponent/ArticleComponent/Article";

import PortfolioHeader from "./PortfolioHeaderComponent/PortfolioHeader";

const PortfolioDetails = (props) => {
	const { pathname } = props.location;
	const url = pathname;
	console.log(url);
	return (
		<Fragment>
			<PortfolioHeader />
			<Router>
				<Switch>
					<Route exact path={`${url}`} component={Welcome} />
					<Route path={`${url}/CV`} component={CV} />
					<Route path={`${url}/Research`} component={Research} />
					<Route path={`${url}`} component={Article} />
					<Route path={`${url}`} component={ProjectDone} />
					<Route path={`${url}`} component={Experience} />
				</Switch>
			</Router>
		</Fragment>
	);
};

export default PortfolioDetails;
