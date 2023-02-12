import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import "./scss/index.scss";

import App from "./components/App/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter basename="/">
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
);
