import React from "react";
import Header from "../HeaderComponent/Header";
import Images from "./MountainImages";
const Mountains = () => {
	const mountainList = Images.map((image) => (
		<img
			key={Math.random() * 10}
			className="App-image"
			alt={image.title}
			src={image.imageUrl}
		/>
	));
	return (
		<div className="Image-grid-container">
			<Header name="Mountains" />
			<div className="list">{mountainList}</div>
		</div>
	);
};
export default Mountains;
