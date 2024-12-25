import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  categoryProducts: {},
  product: {},
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setCategoryProducts: (state, action) => {
      const { category, products } = action.payload; // Expect category and products in payload
      state.categoryProducts[category] = products; // Store products under the category key
    },
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    clearProduct: (state) => {
      state.product = {}; // Reset product to null
    },
  },
});

export const {
  setCategories,
  setCategoryProducts,
  setProduct,
  setProducts,
  clearProduct,
} = productSlice.actions;
export default productSlice.reducer;
