import React from "react";
import Promo from "./Promo/Promo";
import Search from "./Search/Search";

import "./Main.scss";

const Main = props => {
	return (
		<main className="main">
			<Promo data={props.data.Promo} />
			<Search data={props.data.Search} />
		</main>
	);
};

export default Main;
