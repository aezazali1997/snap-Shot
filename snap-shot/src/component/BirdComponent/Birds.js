import React from "react";
import Header from "../HeaderComponent/Header";
import ImagesBirds from "./BirdsImages";
const Birds = () => {
	const birdList = ImagesBirds.map((image) => (
		<img
			key={Math.random() * 30}
			className="App-image"
			alt={image.title}
			src={image.imageUrl}
		/>
	));
	return (
		<div className="Image-grid-container">
			<Header name="Birds" />
			<div className="list">{birdList}</div>
		</div>
	);
};
export default Birds;
