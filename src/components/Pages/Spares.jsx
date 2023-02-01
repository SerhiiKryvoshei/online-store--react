import React from "react";
import ProductList from "../ProductList/ProductList";

import styles from "./Spares.module.scss";

const Spares = props => {
	if (props.data.length === 0) {
		return <p className="error-title">Sorry, no Spares search.</p>;
	}
	return (
		<div>
			<h4 className={styles.title}>Запчастини</h4>
			<ProductList data={props.data} />
		</div>
	);
};

export default Spares;
