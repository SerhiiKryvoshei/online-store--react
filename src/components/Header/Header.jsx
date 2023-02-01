import React from "react";
import { Link } from "react-router-dom";

import classnames from "classnames";

import svgLogo from "../../assets/images/logo.svg";
import svgHeart from "../../assets/images/heart.svg";
import svgUser from "../../assets/images/user.svg";
import svgBasket from "../../assets/images/basket.svg";

import styles from "./Header.module.scss";

const Header = props => {
	return (
		<header className={styles.header}>
			<div className={styles.top}>
				<div className="container">
					<div className={styles.inner}>
						<nav className={styles.menu}>
							<ul className={styles.menu__list}>
								<li className={styles.menu__item}>
									<Link className={styles.menu__link} to="/stores">
										{props.data.link1}
									</Link>
								</li>
								<li className={styles.menu__item}>
									<Link className={styles.menu__link} to="/stocks">
										{props.data.link2}
									</Link>
								</li>
								<li className={styles.menu__item}>
									<Link className={styles.menu__link} to="/shipping">
										{props.data.link3}
									</Link>
								</li>
							</ul>
						</nav>
						<Link className={styles.logo} to="/">
							<img className={styles.logoImg} src={svgLogo} alt="logo" />
						</Link>
						<div className={styles.box}>
							<p className={styles.address}>{props.data.address}</p>
							<ul className={styles.userList}>
								<li className={styles.userList__item}>
									<a className={styles.userList__link} href="#Link11">
										<img
											className={styles.userList__pic}
											src={svgHeart}
											alt="icon"
										/>
									</a>
								</li>
								<li className={styles.userList__item}>
									<a className={styles.userList__link} href="#Link21">
										<img
											className={styles.userList__pic}
											src={svgUser}
											alt="icon"
										/>
									</a>
								</li>
								<li className={styles.userList__item}>
									<a
										className={classnames(styles.userList__link, styles.basket)}
										href="#Link31"
									>
										<img
											className={styles.userList__pic}
											src={svgBasket}
											alt="icon"
										/>
										<p className={styles.basket__num}>
											{props.data.quantityProduct}
										</p>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.bottom}>
				<div className="container">
					<ul className={styles.categories}>
						<li className={styles.categories__item}>
							<Link className={styles.categories__link} to="quad-bike">
								{props.data.categories.link1}
							</Link>
						</li>
						<li className={styles.categories__item}>
							<Link className={styles.categories__link} to="speedboats">
								{props.data.categories.link2}
							</Link>
						</li>
						<li className={styles.categories__item}>
							<Link className={styles.categories__link} to="jet-skis">
								{props.data.categories.link3}
							</Link>
						</li>
						<li className={styles.categories__item}>
							<Link className={styles.categories__link} to="boats">
								{props.data.categories.link2}
							</Link>
						</li>
						<li className={styles.categories__item}>
							<a className={styles.categories__link} href="#link41">
								{props.data.categories.link5}
							</a>
						</li>
						<li className={styles.categories__item}>
							<a className={styles.categories__link} href="#link41">
								{props.data.categories.link6}
							</a>
						</li>
						<li className={styles.categories__item}>
							<a className={styles.categories__link} href="#link41">
								{props.data.categories.link7}
							</a>
						</li>
						<li className={styles.categories__item}>
							<a className={styles.categories__link} href="#link41">
								{props.data.categories.link8}
							</a>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Header;
