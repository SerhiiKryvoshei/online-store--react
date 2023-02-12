import React from "react";

import { ProductCard } from "./ProductCard";

import styles from "./ProductList.module.scss";

const ProductList = (props) => {
	if (props.data.length === 0) {
		return <h5>Sorry, no products matched your search.</h5>;
	}

	const products = props.data;
	const item = products.map((product) => (
		<ProductCard key={product.id} product={product} />
	));
	return <div className={styles.list}>{item}</div>;
};

export default ProductList;
