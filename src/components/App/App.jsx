import { Routes, Route } from "react-router-dom";
import { data } from "../../data/data";
import { products } from "../../data/productList";

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
					<Route path="/rovers" element={<Rovers data={products.rovers} />} />
					<Route
						path="/snowshoes"
						element={<Snowshoes data={products.snowshoes} />}
					/>
					<Route path="/motors" element={<Motors data={products.motors} />} />
					<Route path="/spares" element={<Spares data={products.spares} />} />
					<Route path="*" element={<ErrorPage />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
