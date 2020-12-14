import React, { useState } from "react";
import "./SearchBox.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
	const [searchEntry, setSearchEntry] = useState("");
	const Update = (e) => {
		setSearchEntry(e.target.value);
	};
	return (
		<div className="Search-bar-container">
			<input
				id="search-text"
				type="text"
				placeholder="Search..."
				className="Search-field"
				onChange={Update}
				value={searchEntry}
			/>
			<button
				className={`Search-icon-button ${
					searchEntry.trim() ? "Search-icon-button--blue" : null
				}`}
			>
				<FontAwesomeIcon icon={faSearch} />
			</button>
		</div>
	);
};
export default Search;
