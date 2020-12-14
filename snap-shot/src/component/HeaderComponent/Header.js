import React, { Component } from "react";
import Search from "../SearchBoxComponent/SearchBox";
import CustomLink from "../CustomButtonComponent/Link";
import "./header.scss";

export class Header extends Component {
	render() {
		const name = this.props.name;
		return (
			<div className="main-container">
				<h1 className="title-text">SnapShot</h1>
				<Search />
				<div className="buttons">
					<CustomLink buttonName="Mountains" link="/" />
					<CustomLink buttonName="Beaches" link="/Categories/Beaches" />
					<CustomLink buttonName="Birds" link="/Categories/Birds" />
					<CustomLink buttonName="Food" link="/Categories/Food" />
					<CustomLink buttonName="Portfolio" link="/Categories/Portfolio" />
				</div>
				<h1 className="title-images"> {name} Pictures</h1>
			</div>
		);
	}
}

export default Header;
