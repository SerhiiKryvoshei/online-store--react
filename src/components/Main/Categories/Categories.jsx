import React from "react";
// import classNames from "classnames";

import categories01Img from "../../../assets/images/categories/categories01.png";
import categories02Img from "../../../assets/images/categories/categories02.png";
import categories03Img from "../../../assets/images/categories/categories03.png";
import categories04Img from "../../../assets/images/categories/categories04.png";
import categories05Img from "../../../assets/images/categories/categories05.png";
import categories06Img from "../../../assets/images/categories/categories06.png";

import styles from "./Categories.module.scss";

const Categories = props => {
	return (
		<section className={styles.categories}>
			<div className="container">
				<div className={styles.inner}>
					<div className={styles.item}>
						<div className={styles.info}>
							<h4 className={styles.title}>{props.data.nameFirst}</h4>
							<p className={styles.text}>{props.data.text}</p>
						</div>
						<div className={styles.pic}>
							<img src={categories01Img} alt="categories pic" />
						</div>
					</div>
					<div className={styles.item}>
						<div className={styles.info}>
							<h4 className={styles.title}>{props.data.nameSecond}</h4>
							<p className={styles.text}>{props.data.text}</p>
						</div>
						<div className={styles.pic}>
							<img src={categories02Img} alt="categories pic" />
						</div>
					</div>
					<div className={styles.item}>
						<div className={styles.info}>
							<h4 className={styles.title}>{props.data.nameThird}</h4>
							<p className={styles.text}>{props.data.text}</p>
						</div>
						<div className={styles.pic}>
							<img src={categories03Img} alt="categories pic" />
						</div>
					</div>
					<div className={styles.item}>
						<div className={styles.info}>
							<h4 className={styles.title}>{props.data.nameFourth}</h4>
							<p className={styles.text}>{props.data.text}</p>
						</div>
						<div className={styles.pic}>
							<img src={categories04Img} alt="categories pic" />
						</div>
					</div>
					<div className={styles.item}>
						<div className={styles.info}>
							<h4 className={styles.title}>{props.data.nameFifth}</h4>
							<p className={styles.text}>{props.data.text}</p>
						</div>
						<div className={styles.pic}>
							<img src={categories05Img} alt="categories pic" />
						</div>
					</div>
					<div className={styles.item}>
						<div className={styles.info}>
							<h4 className={styles.title}>{props.data.nameSixth}</h4>
							<p className={styles.text}>{props.data.text}</p>
						</div>
						<div className={styles.pic}>
							<img src={categories06Img} alt="categories pic" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Categories;
