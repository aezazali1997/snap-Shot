import Mountain from "./component/MountainComponent/Mountains";
import { Route, Switch } from "react-router-dom";
import PortfolioDetails from "./component/PortfolioDetailComponent/portfolioDetails";
import Categories from "./component/Categories/Categories";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={Mountain} />
				<Route path="/Categories" component={Categories} />
				<Route path="/PortfolioDetails" component={PortfolioDetails} />
			</Switch>
		</div>
	);
}
export default App;
