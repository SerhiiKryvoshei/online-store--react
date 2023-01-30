import React, { useState } from "react";
import classNames from "classnames";

import Product from "./Product/Product";

import styles from "./Products.module.scss";

const Products = props => {
	const [toggleState, setToggleState] = useState(1);
	const toggleTab = index => {
		setToggleState(index);
	};

	return (
		<section className={styles.products}>
			<div className="container">
				<div className={styles.inner}>
					{props.data.title}
					<div className={styles["block-tabs"]}>
						<div className={styles["tabs"]}>
							<a
								className={styles["tab"]}
								href="#pr"
								onClick={() => toggleTab(1)}
							>
								{props.data.tabs[0]}
							</a>
						</div>
						<div className={styles["tabs"]}>
							<a
								className={styles["tab"]}
								href="#pr"
								onClick={() => toggleTab(2)}
							>
								{props.data.tabs[1]}
							</a>
						</div>
						<div className={styles["tabs"]}>
							<a
								className={styles["tab"]}
								href="#pr"
								onClick={() => toggleTab(3)}
							>
								{props.data.tabs[2]}
							</a>
						</div>
						<div className={styles["tabs"]}>
							<a
								className={styles["tab"]}
								href="#pr"
								onClick={() => toggleTab(4)}
							>
								{props.data.tabs[3]}
							</a>
						</div>
						<div className={styles["tabs"]}>
							<a
								className={styles["tab"]}
								href="#pr"
								onClick={() => toggleTab(5)}
							>
								{props.data.tabs[4]}
							</a>
						</div>
						<div className={styles["tabs"]}>
							<a
								className={styles["tab"]}
								href="#pr"
								onClick={() => toggleTab(6)}
							>
								{props.data.tabs[5]}
							</a>
						</div>
					</div>
					<div className={styles["tabs-content"]}>
						<div
							className={
								toggleState === 1
									? classNames(styles["tab-content"], styles["active-content"])
									: styles["tab-content"]
							}
						>
							<Product data={props.data.popularProductsPart[0]} />
							<Product data={props.data.popularProductsPart[1]} />
							<Product data={props.data.popularProductsPart[2]} />
							<Product data={props.data.popularProductsPart[3]} />
						</div>
						<div
							className={
								toggleState === 2
									? classNames(styles["tab-content"], styles["active-content"])
									: styles["tab-content"]
							}
						>
							<Product data={props.data.popularProducts[0]} />
						</div>
						<div
							className={
								toggleState === 3
									? classNames(styles["tab-content"], styles["active-content"])
									: styles["tab-content"]
							}
						>
							<Product data={props.data.popularProducts[1]} />
						</div>
						<div
							className={
								toggleState === 4
									? classNames(styles["tab-content"], styles["active-content"])
									: styles["tab-content"]
							}
						>
							<Product data={props.data.popularProducts[0]} />
						</div>
						<div
							className={
								toggleState === 5
									? classNames(styles["tab-content"], styles["active-content"])
									: styles["tab-content"]
							}
						>
							<Product data={props.data.popularProducts[1]} />
						</div>
						<div
							className={
								toggleState === 6
									? classNames(styles["tab-content"], styles["active-content"])
									: styles["tab-content"]
							}
						>
							<Product data={props.data.popularProducts[0]} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Products;
