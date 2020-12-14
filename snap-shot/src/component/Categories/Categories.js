import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Bird from "../BirdComponent/Birds";
import Beach from "../BeachComponent/Beaches";
import Food from "../FoodComponent/Food";
import Portfolio from "../PortfolioComponent/Portfolio";
class Categories extends Component {
	render() {
		return (
			<Switch>
				<Route path="/Categories/Birds" component={Bird} />
				<Route path="/Categories/Beaches" component={Beach} />
				<Route path="/Categories/Food" component={Food} />
				<Route path="/Categories/Portfolio" component={Portfolio} />
			</Switch>
		);
	}
}

export default Categories;
