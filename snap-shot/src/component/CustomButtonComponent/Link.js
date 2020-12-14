import React from "react";
import "./link.scss";
const CustomLink = (props) => {
	return (
		<a href={props.link} className="App-link">
			{props.buttonName}
		</a>
	);
};
export default CustomLink;
