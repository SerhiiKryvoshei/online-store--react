import React from "react";
import ProductList from "../ProductList/ProductList";

import styles from "./Boats.module.scss";

const Boats = props => {
	if (props.data.length === 0) {
		return <p className="error-title">Sorry, no Boats search.</p>;
	}
	return (
		<div>
			<h4 className={styles.title}>Човни</h4>
			<ProductList data={props.data} />
		</div>
	);
};

export default Boats;
