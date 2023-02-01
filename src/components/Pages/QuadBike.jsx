import React from "react";
import ProductList from "../ProductList/ProductList";

import styles from "./QuadBike.module.scss";

const QuadBike = props => {
	if (props.data.length === 0) {
		return <p className="error-title">Sorry, no quad bike search.</p>;
	}
	return (
		<div>
			<h4 className={styles.title}>Квадроцикли</h4>
			<ProductList data={props.data} />
		</div>
	);
};

export default QuadBike;
