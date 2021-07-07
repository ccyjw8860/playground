import { combineReducers } from "redux";
import userReducer from "./userSlice";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  // localStorage에 저장합니다.
  storage,
};

const rootReducer = combineReducers({
  userReducer,
});

export default persistReducer(persistConfig, rootReducer);
