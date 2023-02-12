import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productSlice";

const store = configureStore({
	reducer: {
		products: productsReducer,
	},
});

export default store;
