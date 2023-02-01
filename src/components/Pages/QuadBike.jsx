import React from "react";
import ProductList from "../ProductList/ProductList";

import styles from "./QuadBike.module.scss";

const QuadBike = props => {
	if (props.data.length === 0) {
		return <h5>Sorry, no quad bike search.</h5>;
	}
	return (
		<div>
			<h4 className={styles.title}>Квадроцикли</h4>
			<ProductList data={props.data} />
		</div>
	);
};

export default QuadBike;
