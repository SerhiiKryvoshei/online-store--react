import React from "react";
import ProductList from "../ProductList/ProductList";

import styles from "./SpeedBoats.module.scss";

const Boats = props => {
	if (props.data.length === 0) {
		return <p className="error-title">Sorry, no Speed Boats search.</p>;
	}
	return (
		<div>
			<h4 className={styles.title}>Катери</h4>
			<ProductList data={props.data} />
		</div>
	);
};

export default Boats;
