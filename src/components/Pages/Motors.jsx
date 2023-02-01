import React from "react";
import ProductList from "../ProductList/ProductList";

import styles from "./Motors.module.scss";

const Motors = props => {
	if (props.data.length === 0) {
		return <p className="error-title">Sorry, no Motors search.</p>;
	}
	return (
		<div>
			<h4 className={styles.title}>Двигуни</h4>
			<ProductList data={props.data} />
		</div>
	);
};

export default Motors;
