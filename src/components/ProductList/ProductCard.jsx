import { useNavigate } from "react-router-dom";
import styles from "./ProductCard.module.scss";

export const ProductCard = props => {
	const navigate = useNavigate();
	const showProduct = () => {
		navigate(`/product/${props.product.id}`);
	};
	return (
		<div className={styles.card}>
			{/* <p className={styles["hover-text"]}>подивитися товар</p> */}
			<img src={props.product.img} alt="" />
			<p className={styles.title}>{props.product.title}</p>
			<p className={styles.price}>{props.product.price}</p>
			<button
				onClick={() => {
					showProduct();
				}}
			>
				подивитися товар
			</button>
		</div>
	);
};
