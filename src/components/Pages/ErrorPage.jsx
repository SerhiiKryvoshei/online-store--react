import React from "react";
import { Link } from "react-router-dom";

import styles from "./ErrorPage.module.scss";

const ErrorPage = props => {
	return (
		<div className={styles.inner}>
			<p className={styles.title}>Oops!</p>
			<p className={styles.text}>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>Not Found</i>.
				<p className={styles["link-home"]}>
					Go <Link to="/">home</Link>
				</p>
			</p>
		</div>
	);
};

export default ErrorPage;
