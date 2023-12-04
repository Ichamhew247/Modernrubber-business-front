import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "../features/auth/slice/auth-slice";
import productReducer from "../features/CRUD/CompanyList/slice/product-slice";
// import userReducer from "../features/auth/slice/user-slice";

const rootReducer = combineReducers({
  auth: authReducer,
  companyLists: productReducer,
  // usersSlice: userReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(/* any additional middleware here */),
});

const persistor = persistStore(store);

export { store, persistor };
// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import authReducer from "../features/auth/slice/auth-slice";
// import productReducer from "../features/CRUD/Products/slice/product-slice";
// import thunk from "redux-thunk";

// const rootReducer = combineReducers({
//   auth: authReducer,
//   companyLists: productReducer,
// });

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: [thunk], // Add the thunk middleware explicitly
// });

// const persistor = persistStore(store);

// export { store, persistor };
