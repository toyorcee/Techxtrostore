import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";
import themeReducer from "./themeSlice";
import productReducer from "./productSlice";
import { createTransform } from "redux-persist";

// Transform to handle arrays
const arrayTransform = createTransform(
  (inboundState) =>
    Array.isArray(inboundState) ? [...inboundState] : inboundState,
  (outboundState) =>
    Array.isArray(outboundState) ? [...outboundState] : outboundState
);

// Persist configurations
const themePersistConfig = {
  key: "theme",
  storage,
};

const productPersistConfig = {
  key: "product",
  storage,
  transforms: [arrayTransform],
  stateReconciler: autoMergeLevel2, 
};

// Persisted reducers
const persistedThemeReducer = persistReducer(themePersistConfig, themeReducer);
const persistedProductReducer = persistReducer(
  productPersistConfig,
  productReducer
);

// Create the Redux store
const store = configureStore({
  reducer: {
    theme: persistedThemeReducer,
    product: persistedProductReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export default store;
