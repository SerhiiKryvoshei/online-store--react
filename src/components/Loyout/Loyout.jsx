import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Loyout = props => {
	return (
		<div>
			<Header data={props.Header} />
			<main className="container">
				<Outlet />
			</main>
			<Footer data={props.Footer} />
		</div>
	);
};

export default Loyout;
