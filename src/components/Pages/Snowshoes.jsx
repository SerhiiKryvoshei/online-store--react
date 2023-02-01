import React from "react";
import ProductList from "../ProductList/ProductList";

import styles from "./Snowshoes.module.scss";

const Snowshoes = props => {
	if (props.data.length === 0) {
		return <p className="error-title">Sorry, no Snowshoes search.</p>;
	}
	return (
		<div>
			<h4 className={styles.title}>Снігоходи</h4>
			<ProductList data={props.data} />
		</div>
	);
};

export default Snowshoes;
