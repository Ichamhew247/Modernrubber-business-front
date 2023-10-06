import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/slice/auth-slice";
import productReducer from "../features/CRUD/Products/slice/product-slice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
  },
});

export default store;
