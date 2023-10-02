import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import {
//   addProduct,
//   deleteProduct,
//   editProduct,
//   fetchProduct,
// } from "../../../../api/product-api";
export const searchProductAsync = createAsyncThunk(
  "products/searchProductAsync",
  async (searchTerm) => {
    const response = await fetch(
      `http://localhost:9999/products/searchProduct?keyword=${searchTerm}`
    );
    if (response.ok) {
      const products = await response.json();
      return { products };
    }
  }
);

export const getProductsAsync = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await fetch("http://localhost:9999/products/getProduct");
    if (response.ok) {
      const products = await response.json();
      return { products };
    }
  }
);

export const addProductAsync = createAsyncThunk(
  "todos/addProductAsync",
  async (payload, { dispatch }) => {
    // เพิ่ม dispatch ในพารามิเตอร์
    const response = await fetch(
      "http://localhost:9999/products/createProduct",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nameProduct: payload.nameProduct,
          nameProductEtc: payload.nameProductEtc,
          description: payload.description,
          type: payload.type,
          price: payload.price,
          image: payload.image,
          productImage: payload.productImage,
        }),
      }
    );
    if (response.ok) {
      const product = await response.json();
      dispatch(getProductsAsync());
      return { product };
    }
  }
);

export const deleteProductAsync = createAsyncThunk(
  "products/deleteProduct",
  async (payload) => {
    fetch(`http://localhost:9999/products/deleteProduct/${payload.id}`, {
      method: "DELETE",
    });
    return { id: payload.id };
  }
);

export const editProductAsync = createAsyncThunk(
  "products/editProductAsync",
  async (payload) => {
    const response = await fetch(
      `http://localhost:9999/products/editProduct/${payload.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nameProduct: payload.nameProduct,
          nameProductEtc: payload.nameProductEtc,
          description: payload.description,
          type: payload.type,
          price: payload.price,
          image: payload.image,
          productImage: payload.productImage,
        }),
      }
    );
    if (response.ok) {
      await response.json();
      return {
        id: payload.id,
        nameProduct: payload.nameProduct,
        nameProductEtc: payload.nameProductEtc,
        description: payload.description,
        type: payload.type,
        price: payload.price,
        image: payload.image,
        productImage: payload.productImage,
      };
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    searchResults: [], // เพิ่ม searchResults เพื่อเก็บผลลัพธ์การค้นหา
    status: "idle",
    error: null,
  },
  reducers: {
    updateProductImage: (state, action) => {
      state.products.productImage = action.payload;
    },

    editMyProduct: (state, action) => {
      const { id, taxValue, priceValue } = action.payload;
      const todoToEdit = state.products.find((todo) => todo.id === id);

      if (todoToEdit) {
        todoToEdit.taxValue = taxValue;
        todoToEdit.priceValue = priceValue;
      }
      console.log("edit...");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchProductAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        if (action.payload.products) {
          state.searchResults = action.payload.products; // เก็บผลลัพธ์การค้นหาใน searchResults
        } else {
          state.searchResults = []; // หรืออาจจะไม่ต้องเปลี่ยนค่า searchResults ถ้าไม่มีผลลัพธ์
        }
      })
      .addCase(searchProductAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(searchProductAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(getProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProductsAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload.products;
      })
      .addCase(getProductsAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addProductAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addProductAsync.fulfilled, (state, action) => {
        if (action.payload) {
          state.products.push(action.payload.product);
          state.status = "succeeded";
        }
      })
      // .addCase(addProductAsync.fulfilled, (state, action) => {
      //   if (action.payload) {
      //     state.products = [action.payload.product, ...state.products];
      //     state.status = "succeeded";
      //   }
      // })

      .addCase(addProductAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(editProductAsync.fulfilled, (state, action) => {
        const editProductAsync = action.payload;
        state.products = state.products.map((product) =>
          product.id === editProductAsync.id ? editProductAsync : product
        );
      })
      .addCase(deleteProductAsync.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (product) => product.id !== action.payload.id
        );
      });
  },
});

export const { editMyProduct, searchProducts, updateProductImage } =
  productSlice.actions;
export default productSlice.reducer;
