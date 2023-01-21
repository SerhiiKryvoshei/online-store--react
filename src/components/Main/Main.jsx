import React from "react";
import Promo from "./Promo/Promo";

import "./Main.scss";

const Main = props => {
	return (
		<main className="main">
			<Promo data={props.data.Promo} />
		</main>
	);
};

export default Main;
