import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProductsAsync = createAsyncThunk(
  "products/getProductsAsync",
  async () => {
    const response = await fetch("http://localhost:9999/products/getProduct");
    if (response.ok) {
      const products = await response.json();
      return { products };
    }
  }
);

export const addProductAsync = createAsyncThunk(
  "products/addProductAsync",
  async (payload) => {
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
        }),
      }
    );
    if (response.ok) {
      const product = await response.json();
      return { product };
    }
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
      };
    }
  }
);

export const deleteProductAsync = createAsyncThunk(
  "todos/deleteProductAsync",
  async (payload) => {
    fetch(`http://localhost:9999/products/deleteProduct/${payload.id}`, {
      method: "DELETE",
    });
    return { id: payload.id };
  }
);

const initialState = [
  {
    id: 1,
    nameProduct: "ลhv]^dd]bhwwwwwwwwwwwww'",
    nameProductEtc: "nameEt1111111111111111111เต็ม",
    description: "descriptionwwwwwwwwwwwwww",
    type: "ยางwww111111111111111111",
    price: "12311111111111111111111111",
    image: "ยาง111111111111111www",
  },
  {
    id: 2,
    nameProduct: "n22",
    nameProductEtc: "namsdsdsdeEtc",
    description: "descsdsdsdription",
    price: "12222223",
    type: "ยาง",
    image: "ยาง",
  },
  {
    id: 3,
    nameProduct: "namePronossssssssssooooo",
    nameProductEtc: "namssssssssssssssseEtc",
    description: "description",
    price: "123",
    type: "ยาง",
    image: "ยาง",
  },
];

const productSlice = createSlice({
  name: "products",
  initialState,

  reducers: {
    editProductAsyncFulfilled: (state, action) => {
      const {
        id,
        nameProduct,
        nameProductEtc,
        description,
        type,
        price,
        image,
      } = action.payload;
      const productEdit = state.find((product) => product.id === id);
      if (productEdit) {
        productEdit.nameProduct = nameProduct;
        productEdit.nameProductEtc = nameProductEtc;
        productEdit.description = description;
        productEdit.type = type;
        productEdit.price = price;
        productEdit.image = image;
      }
      console.log("edit...");
    },
  },

  extraReducers: {
    [addProductAsync.fulfilled]: (state, action) => {
      console.log("เพิ่มโปรดัคใหม่");
      state.unshift(action.payload.product);
    },
    [deleteProductAsync.fulfilled]: (state, action) => {
      console.log("Deleted...");
      return state.filter((product) => product.id !== action.payload.id);
    },
    // [editProductAsync.fulfilled]: (state, action) => {
    //   const updatedTodo = action.payload; // Check the payload structure
    //   const index = state.findIndex((product) => product.id === updatedTodo.id);

    //   if (index !== -1) {
    //     // Update the specific todo item
    //     state[index] = updatedTodo;
    //   }
    // },
  },
});

export const {
  // addProductAsync,
  // editProductAsync,
  // deleteProductAsync,
  editProductAsyncFulfilled,
} = productSlice.actions;
productSlice.actions;
export default productSlice.reducer;
