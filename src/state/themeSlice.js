import { createSlice } from "@reduxjs/toolkit";

// Initial state for the theme
const initialState = {
  mode: "light", // Default theme mode
};

// Create the theme slice
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light"; // Toggle between light and dark modes
    },
  },
});

// Export the reducer and actions
export const { toggleMode } = themeSlice.actions;
export default themeSlice.reducer;
