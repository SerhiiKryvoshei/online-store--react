import React from "react";

import instagram from "../../assets/images/social/instagram.svg";
import facebook from "../../assets/images/social/facebook.svg";
import youtube from "../../assets/images/social/youtube.svg";

import styles from "./Footer.module.scss";

const Footer = props => {
	return (
		<footer className={styles.footer}>
			<div className="container">
				<div className={styles.top}>
					<div className={styles.inner}>
						<div className={styles.item}>
							<p className={styles.title}>{props.data.title}</p>
							<form className={styles.form} action="">
								<input
									className={styles.input}
									type="text"
									placeholder={props.data.placeholder}
								/>
								<button className={styles.btn} type="submit">
									{props.data.nameBtn}
								</button>
							</form>
						</div>
						<div className={styles.item}>
							<p className={styles.title}>Інформація</p>
							<ul className={styles.list}>
								<li className={styles["list-item"]}>Про компанію</li>
								<li className={styles["list-item"]}>Контакти</li>
								<li className={styles["list-item"]}>Акції</li>
								<li className={styles["list-item"]}>Магазини</li>
							</ul>
						</div>
						<div className={styles.item}>
							<p className={styles.title}>Інтернет-магазин</p>
							<ul className={styles.list}>
								<li className={styles["list-item"]}>Доставка та самовивіз</li>
								<li className={styles["list-item"]}>Оплата</li>
								<li className={styles["list-item"]}>Повернення-обмін</li>
								<li className={styles["list-item"]}>Новини</li>
							</ul>
						</div>
						<div className={styles.item}>
							<div className={styles.social}>
								<img src={instagram} alt="" />
								<img src={facebook} alt="" />
								<img src={youtube} alt="" />
							</div>
						</div>
					</div>
				</div>
				<div className={styles.bottom}>
					<a className={styles.link} href="#L">
						Договір оферти
					</a>
					<a className={styles.link} href="#L">
						Політика обробки персональних даних
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
