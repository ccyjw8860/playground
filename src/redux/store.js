import { configureStore } from "@reduxjs/toolkit";
import persistStore from "redux-persist/es/persistStore";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = persistStore(store);
export default store;
