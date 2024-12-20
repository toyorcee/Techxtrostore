// state/store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Use localStorage as default storage
import themeReducer from "./themeSlice"; // Import your reducer

// Persist configuration
const persistConfig = {
  key: "root", // The key under which the state is stored in storage
  storage, // The storage engine (localStorage here)
};

// Persisted reducer
const persistedThemeReducer = persistReducer(persistConfig, themeReducer);

// Create the Redux store
const store = configureStore({
  reducer: {
    theme: persistedThemeReducer, // Wrap only the theme reducer with persist
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Ignore non-serializable warnings for Redux Persist
    }),
});

// Export both the store and persistor
export const persistor = persistStore(store);
export default store;
