import { Routes, Route } from "react-router-dom";
import { data } from "../../data/data";
import { products } from "../../data/productList";

import Loyout from "../Loyout/Loyout";

import HomePage from "../Pages/HomePage";
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
						path="/jet-skis"
						element={<JetSkis data={products.jetSkis} />}
					/>
					<Route path="*" element={<ErrorPage />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
