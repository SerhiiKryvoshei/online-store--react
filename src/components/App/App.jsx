import { Routes, Route } from "react-router-dom";
import { data } from "../../data/data";
import { categories, products } from "../../data/productList";

import Loyout from "../Loyout/Loyout";

import HomePage from "../Pages/HomePage";
import QuadBike from "../Pages/QuadBike";
import SpeedBoats from "../Pages/SpeedBoats";
import JetSkis from "../Pages/JetSkis";
import Boats from "../Pages/Boats";
import Rovers from "../Pages/Rovers";
import Snowshoes from "../Pages/Snowshoes";
import Motors from "../Pages/Motors";
import Spares from "../Pages/Spares";

import ErrorPage from "../Pages/ErrorPage";

import ProductPage from "../ProductList/ProductPage";

import Search from "../Main/Search/Search";

import "./App.scss";

function App() {
	const { Header, Footer } = data;

	const productsJetSkis = products
		.filter((item) => item.categoryName === "jet-skis")
		.sort((x, y) => y.price - x.price);
	const productsQuadBike = products
		.filter((item) => item.categoryName === "quad-bike")
		.sort((x, y) => y.price - x.price);
	const productsBoats = products
		.filter((item) => item.categoryName === "boats")
		.sort((x, y) => y.price - x.price);
	const productsSpeedBoats = products
		.filter((item) => item.categoryName === "speed-boats")
		.sort((x, y) => y.price - x.price);
	const productsRovers = products
		.filter((item) => item.categoryName === "rovers")
		.sort((x, y) => y.price - x.price);
	const productsSnowmobile = products
		.filter((item) => item.categoryName === "snowmobile")
		.sort((x, y) => y.price - x.price);
	const productsMotors = products
		.filter((item) => item.categoryName === "motors")
		.sort((x, y) => y.price - x.price);
	const productsSpares = products
		.filter((item) => item.categoryName === "spares")
		.sort((x, y) => y.price - x.price);

	return (
		<>
			<Routes>
				<Route path="/" element={<Loyout Header={Header} Footer={Footer} />}>
					<Route
						index
						element={<HomePage data={data.Main} categories={categories} />}
					/>
					<Route path="/stores" element={<ErrorPage />} />
					<Route path="/stocks" element={<Search data={data.Main.Search} />} />
					<Route path="/shipping" element={<ErrorPage />} />
					<Route
						path="/quad-bike"
						element={<QuadBike data={productsQuadBike} />}
					/>
					<Route
						path="/speedboats"
						element={<SpeedBoats data={productsSpeedBoats} />}
					/>
					<Route
						path="/jet-skis"
						element={<JetSkis data={productsJetSkis} />}
					/>
					<Route path="/boats" element={<Boats data={productsBoats} />} />
					<Route path="/rovers" element={<Rovers data={productsRovers} />} />
					<Route
						path="/snowshoes"
						element={<Snowshoes data={productsSnowmobile} />}
					/>
					<Route path="/motors" element={<Motors data={productsMotors} />} />
					<Route path="/spares" element={<Spares data={productsSpares} />} />
					<Route
						path="/product/:productId"
						element={<ProductPage data={products} />}
					/>
					<Route path="*" element={<ErrorPage />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
