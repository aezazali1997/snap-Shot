import React from "react";
import { Link } from "react-router-dom";
import Search from "../../SearchBoxComponent/SearchBox";

import "./PortfolioHeader.scss";

const PortfolioHeader = () => {
	/* 	console.log(props.Info);
	const { name, position } = props.Info; */
	return (
		<div>
			<div className="header">
				<div className="header__title-contianer">
					<h1 className="header__title">name</h1>
					<p className="header__sub-title">position</p>
				</div>
				<div className="header__links-container">
					<div className="links-container">
						<Link to="/PortfolioDetails/Welcome" className="link">
							Welcome
						</Link>
						<Link to="/PortfolioDetails/CV" className="link">
							CV
						</Link>
						<Link to="/PortfolioDetails/Research" className="link">
							Research
						</Link>
						<Link to="/PortfolioDetails/Article" className="link">
							Articles
						</Link>
						<Link to="/PortfolioDetails/Experience" className="link">
							Experience
						</Link>
						<Link to="/PortfolioDetails/Project" className="link">
							Projects
						</Link>
					</div>
					<div className="header__search-box">
						<Search />
					</div>
				</div>
			</div>
		</div>
	);
};

export default PortfolioHeader;
