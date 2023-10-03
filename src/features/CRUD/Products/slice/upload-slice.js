import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// สร้าง async thunk เพื่อบันทึกรูปภาพลงใน Model Products
export const uploadProductImageAsync = createAsyncThunk(
  "products/uploadProductImageAsync",
  async (uploadedImg) => {
    const response = await fetch(
      "http://localhost:9999/products/createProductImage",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ uploadedImg }),
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Failed to upload product image.");
    }
  }
);

const productImageSlice = createSlice({
  name: "productImage",
  initialState: {
    uploading: false, // สถานะการอัพโหลดรูปภาพ
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadProductImageAsync.pending, (state) => {
        state.uploading = true;
        state.error = null;
      })
      .addCase(uploadProductImageAsync.fulfilled, (state) => {
        state.uploading = false;
      })
      .addCase(uploadProductImageAsync.rejected, (state, action) => {
        state.uploading = false;
        state.error = action.error.message;
      });
  },
});

export default productImageSlice.reducer;
