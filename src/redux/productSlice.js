import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
	name: "products",
	initialState: {
		products: [],
		selectedProductID: "",
	},
	reducers: {
		selectedProduct: (state, action) => {
			const productId = action.payload.id;
			state.selectedProductID = productId;
			// console.log(state.selectedProductID);
		},
	},
});

export const { selectedProduct } = productsSlice.actions;

export default productsSlice.reducer;
