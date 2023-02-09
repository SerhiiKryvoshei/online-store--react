import React, { useRef } from "react";
// import classNames from "classnames";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

import banner01Img from "../../../assets/images/banner/banner01.jpg";
import banner02Img from "../../../assets/images/banner/banner02.jpg";
import banner03Img from "../../../assets/images/banner/banner03.jpg";
import banner04Img from "../../../assets/images/banner/banner04.jpg";
import banner05Img from "../../../assets/images/banner/banner05.jpg";
import banner06Img from "../../../assets/images/banner/banner06.jpg";

import product0001Img from "../../../assets/images/products/product0001.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./Promo.module.scss";
import "./slider.css";

const PromoItem = (props) => {
	return (
		<div className={styles.sliderItem}>
			<img className={styles.pic} src={props.img} alt="blog pic" />
		</div>
	);
};

const Promo = (props) => {
	const progressCircle = useRef(null);
	const progressContent = useRef(null);
	const onAutoplayTimeLeft = (s, time, progress) => {
		progressCircle.current.style.setProperty("--progress", 1 - progress);
		progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
	};

	return (
		<section className={styles.promo}>
			<div className="container">
				<div className={styles.inner}>
					<div className={styles.slider}>
						<Swiper
							spaceBetween={30}
							centeredSlides={true}
							autoplay={{
								delay: 7000,
								disableOnInteraction: false,
							}}
							pagination={{
								clickable: true,
							}}
							navigation={true}
							modules={[Autoplay, Pagination, Navigation]}
							onAutoplayTimeLeft={onAutoplayTimeLeft}
							className="mySwiper"
						>
							<SwiperSlide>
								<PromoItem img={banner01Img} />
							</SwiperSlide>
							<SwiperSlide>
								<PromoItem img={banner02Img} />
							</SwiperSlide>
							<SwiperSlide>
								<PromoItem img={banner03Img} />
							</SwiperSlide>
							<SwiperSlide>
								<PromoItem img={banner04Img} />
							</SwiperSlide>
							<SwiperSlide>
								<PromoItem img={banner05Img} />
							</SwiperSlide>
							<SwiperSlide>
								<PromoItem img={banner06Img} />
							</SwiperSlide>
							<div className="autoplay-progress" slot="container-end">
								<svg viewBox="0 0 48 48" ref={progressCircle}>
									<circle cx="24" cy="24" r="20"></circle>
								</svg>
								<span ref={progressContent}></span>
							</div>
						</Swiper>
					</div>
					<div className={styles.promotion}>
						<div className={styles.promotionTop}>
							<p className={styles.promotionInfo}>{props.data.info}</p>
							<div className={styles.promotionPrice}>
								<div className={styles.priceNew}>{props.data.priceNew}</div>
								<div className={styles.priceOld}>{props.data.priceOld}</div>
							</div>
						</div>
						<img
							className={styles.promotionPic}
							src={product0001Img}
							alt="product"
						/>
						<p className={styles.promotionTitle}>{props.data.title}</p>
						<p className={styles.promotionFooter}>
							{props.data.footer}
							<span> {props.data.date}</span>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Promo;
