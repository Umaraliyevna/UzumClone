import { configureStore } from "@reduxjs/toolkit";
import reduxLogger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./reducers";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,

  middleware: () => [reduxLogger],
});

const persistedStore = persistStore(store);
export { store, persistedStore };
