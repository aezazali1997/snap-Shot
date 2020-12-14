import React from "react";
import Projects from "./Projects";
import "./portfolio.scss";
import Header from "../HeaderComponent/Header";
import { Link } from "react-router-dom";

function Portfolio() {
	const projectList = Projects.map((project) => (
		<div key={Math.random() * 50} className="image-text-container">
			<Link
				to={{
					pathname: "/PortfolioDetails",
					state: project,
				}}
				className="link-container"
			>
				<img alt="" src={project.imageUrl} />
				<i className="icon-container fas fa-search fa-3x"></i>
			</Link>
			<h2 className="text-container">{project.name}</h2>
		</div>
	));
	return (
		<div className="Image-grid-container">
			<Header name="Portfolio" />
			<div className="image-grid-container">{projectList}</div>
		</div>
	);
}

export default Portfolio;
