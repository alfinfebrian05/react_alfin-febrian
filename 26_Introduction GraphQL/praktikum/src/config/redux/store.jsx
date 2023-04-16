import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducer from "./reducer";
import thunkMiddleware from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["product"],
  blacklist: ["isEdit"],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunkMiddleware],
});

export const persist_store = persistStore(store);
export default store;
