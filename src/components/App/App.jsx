import { Routes, Route } from "react-router-dom";
import { data } from "../../data/data";
import { products } from "../../data/productList";

import Loyout from "../Loyout/Loyout";

import HomePage from "../Pages/HomePage";

import SpeedBoats from "../Pages/SpeedBoats";
import QuadBike from "../Pages/QuadBike";
import Boats from "../Pages/Boats";
import JetSkis from "../Pages/JetSkis";

import ErrorPage from "../Pages/ErrorPage";

import Search from "../Main/Search/Search";

import "./App.scss";

function App() {
	const { Header, Footer } = data;

	return (
		<>
			<Routes>
				<Route path="/" element={<Loyout Header={Header} Footer={Footer} />}>
					<Route index element={<HomePage data={data.Main} />} />
					<Route path="/stores" element={<ErrorPage />} />
					<Route path="/stocks" element={<Search data={data.Main.Search} />} />
					<Route path="/shipping" element={<ErrorPage />} />
					<Route
						path="/quad-bike"
						element={<QuadBike data={products.quadBike} />}
					/>
					<Route
						path="/speedboats"
						element={<SpeedBoats data={products.speedboats} />}
					/>
					<Route
						path="/jet-skis"
						element={<JetSkis data={products.jetSkis} />}
					/>
					<Route path="/boats" element={<Boats data={products.boats} />} />

					<Route path="*" element={<ErrorPage />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
