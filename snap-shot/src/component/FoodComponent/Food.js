import React from "react";
import Header from "../HeaderComponent/Header";
import ImagesFood from "./FoodImages";
const Food = () => {
	const foodList = ImagesFood.map((image) => (
		<img
			className="App-image"
			src={image.imageUrl}
			alt={image.title}
			key={Math.random() * 40}
		/>
	));
	return (
		<div className="Image-grid-container">
			<Header name="Food" />
			<div className="list">{foodList}</div>
		</div>
	);
};
export default Food;
