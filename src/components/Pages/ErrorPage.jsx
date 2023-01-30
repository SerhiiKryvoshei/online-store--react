import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = props => {
	return (
		<div className="container">
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>Not Found</i>. Go <Link to="/">home</Link>
			</p>
		</div>
	);
};

export default ErrorPage;
