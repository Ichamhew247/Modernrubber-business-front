import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/slice/auth-slice";
import todoReducer from "../features/CRUD/Invoice/slice/todo-slice";
import productReducer from "../features/CRUD/Products/slice/product-slice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    todos: todoReducer,
    products: productReducer,
  },
});

export default store;
