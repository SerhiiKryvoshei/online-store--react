import React, { useState } from "react";
import classNames from "classnames";

import styles from "./Search.module.scss";

const Search = props => {
	const [toggleState, setToggleState] = useState(1);

	const toggleTab = index => {
		setToggleState(index);
	};

	return (
		<section className={styles.search}>
			<div className="container">
				<div className={styles.blockTabs}>
					<a
						className={
							toggleState === 1
								? classNames(styles.tabs, styles.activeTabs)
								: classNames(styles.tabs)
						}
						href="#tab-1"
						onClick={() => toggleTab(1)}
					>
						{props.data.nameFirst}
					</a>
					<a
						className={
							toggleState === 2
								? classNames(styles.tabs, styles.activeTabs)
								: classNames(styles.tabs)
						}
						href="#tab-2"
						onClick={() => toggleTab(2)}
					>
						{props.data.nameSecond}
					</a>
					<a
						className={
							toggleState === 3
								? classNames(styles.tabs, styles.activeTabs)
								: classNames(styles.tabs)
						}
						href="#tab-3"
						onClick={() => toggleTab(3)}
					>
						{props.data.nameThird}
					</a>
				</div>
				<div className={styles.contentTabs}>
					<div
						className={
							toggleState === 1
								? classNames(styles.content, styles.activeContent)
								: classNames(styles.content)
						}
					>
						<form className={styles.contentForm} action="">
							<input type="text" placeholder={props.data.placeholderFirst} />
							<button type="submit">{props.data.nameButton}</button>
						</form>
					</div>
					<div
						className={
							toggleState === 2
								? classNames(styles.content, styles.activeContent)
								: classNames(styles.content)
						}
					>
						<form className={styles.contentForm} action="">
							<input type="text" placeholder={props.data.placeholderSecond} />
							<button type="submit">{props.data.nameButton}</button>
						</form>
					</div>
					<div
						className={
							toggleState === 3
								? classNames(styles.content, styles.activeContent)
								: classNames(styles.content)
						}
					>
						<form className={styles.contentForm} action="">
							<input type="text" placeholder={props.data.placeholderThird} />
							<button type="submit">{props.data.nameButton}</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Search;
