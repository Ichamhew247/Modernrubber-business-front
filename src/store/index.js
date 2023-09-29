import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/slice/auth-slice";
import todoReducer from "../pages/InvoicePage/slice/todo-slice";
import productReducer from "../features/CRUD/slice/product-slice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    todos: todoReducer,
    products: productReducer,
  },
});

export default store;
