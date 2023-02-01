import React from "react";
import ProductList from "../ProductList/ProductList";

import styles from "./JetSkis.module.scss";

const JetSkis = props => {
	if (props.data.length === 0) {
		return <p className="error-title">Sorry, no JetSkis search.</p>;
	}
	return (
		<div>
			<h4 className={styles.title}>Гідроцикли</h4>
			<ProductList data={props.data} />
		</div>
	);
};

export default JetSkis;
