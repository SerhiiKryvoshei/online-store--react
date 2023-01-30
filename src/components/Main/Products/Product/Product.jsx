import React from "react";

import styles from "./Product.module.scss";

const Product = props => {
	return (
		<div className={styles.product}>
			<img src={props.data.img} alt="src" />
			<p>{props.data.title}</p>
			<p>{props.data.price}</p>
		</div>
	);
};

export default Product;
