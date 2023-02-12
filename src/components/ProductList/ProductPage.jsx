import React from "react";
import { useParams } from "react-router-dom";

import styles from "./ProductPage.module.scss";

const ProductPage = (props) => {
	const { productId } = useParams();
	const products = props.data;
	const item = products.find((product) => product.id === productId);

	if (item === undefined) {
		return <h5>Sorry, no products matched your search.</h5>;
	}

	return (
		<div className={styles.inner}>
			<div className={styles["img-box"]}>
				<img className={styles.pic} src={item.img} alt="" />
				<p className={styles.price}>{item.price}</p>
				<p className={styles.text}>Знайшли дешевше? Знизимо ціну!</p>
			</div>
			<div className={styles["content"]}>
				<p className={styles.title}>{item.title}</p>
			</div>
		</div>
	);
};

export default ProductPage;
