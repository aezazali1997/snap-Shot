import React from "react";
import Header from "../HeaderComponent/Header";
import ImagesBeach from "./BeachesImages";
import "./Beaches.scss";
const Beaches = () => {
	const beachList = ImagesBeach.map((image) => (
		<img
			src={image.imageURL}
			alt={image.title}
			className="App-image"
			key={Math.random() * 20}
		/>
	));
	return (
		<div className="Image-grid-container">
			<Header name="Beaches" />
			<div className="list">{beachList}</div>
		</div>
	);
};
export default Beaches;
