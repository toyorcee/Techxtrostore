import { createSlice } from "@reduxjs/toolkit";

// Initial state for the theme
const initialState = {
  mode: "light",
};

// Create the theme slice
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

// Export the reducer and actions
export const { toggleMode } = themeSlice.actions;
export default themeSlice.reducer;
