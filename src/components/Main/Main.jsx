import React from "react";
import Promo from "./Promo/Promo";
import Search from "./Search/Search";
import Categories from "./Categories/Categories";
import Products from "./Products/Products";

import "./Main.scss";

const Main = props => {
	return (
		<main className="main">
			<Promo data={props.data.Promo} />
			<Search data={props.data.Search} />
			<Categories data={props.data.Categories} />
			<Products data={props.data.Products} />
		</main>
	);
};

export default Main;
