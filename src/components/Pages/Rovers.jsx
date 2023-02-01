import React from "react";
import ProductList from "../ProductList/ProductList";

import styles from "./Rovers.module.scss";

const Rovers = props => {
	if (props.data.length === 0) {
		return <p className="error-title">Sorry, no Rovers search.</p>;
	}
	return (
		<div>
			<h4 className={styles.title}>Всюдиходи</h4>
			<ProductList data={props.data} />
		</div>
	);
};

export default Rovers;
