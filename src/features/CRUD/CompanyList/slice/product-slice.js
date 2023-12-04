import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const searchCompanyListAsync = createAsyncThunk(
  "companyLists/searchCompanyListAsync",
  async (searchTerm) => {
    const response = await fetch(
      `http://localhost:9999/products/searchProduct?keyword=${searchTerm}`
    );
    if (response.ok) {
      const companyLists = await response.json();
      return { companyLists };
    }
  }
);

export const getCompanyListAsync = createAsyncThunk(
  "companyLists/getCompanyListAsync",
  async () => {
    const response = await fetch("http://localhost:9999/products/getProduct");
    if (response.ok) {
      const companyLists = await response.json();
      return { companyLists };
    }
  }
);

export const addCompanyListAsync = createAsyncThunk(
  "companyLists/addCompanyListAsync",
  async (companyListData, { dispatch }) => {
    try {
      const response = await fetch(
        "http://localhost:9999/products/createproduct",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(companyListData),
        }
      );

      if (response.ok) {
        const companyList = await response.json();
        dispatch(getCompanyListAsync());
        return { companyList };
      } else {
        console.error("Failed to add product");
        throw new Error(response.statusText);
      }
    } catch (error) {
      console.error("Error adding product:", error);
      throw new Error(error.message);
    }
  }
);

export const deleteCompanyListAsync = createAsyncThunk(
  "companyLists/deleteCompanyListAsync",
  async (payload) => {
    fetch(`http://localhost:9999/products/deleteProduct/${payload.id}`, {
      method: "DELETE",
    });
    return { id: payload.id };
  }
);

export const editCompanyListAsync = createAsyncThunk(
  "companyLists/editCompanyListAsync",
  async (payload) => {
    const response = await fetch(
      `http://localhost:9999/products/editProduct/${payload.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // customerCode: payload.customerCode,
          companyName: payload.companyName,
          address: payload.address,
          email: payload.email,
          contactNumber: payload.contactNumber,
          note: payload.note,
        }),
      }
    );
    if (response.ok) {
      await response.json();
      return {
        id: payload.id,
        // customerCode: payload.customerCode,
        companyName: payload.companyName,
        address: payload.address,
        email: payload.email,
        contactNumber: payload.contactNumber,
        note: payload.note,
      };
    }
  }
);

const productSlice = createSlice({
  name: "companyLists",
  initialState: {
    companyLists: [],
    searchResults: [],
    status: "idle",
    error: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchCompanyListAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        if (action.payload.companyLists) {
          state.searchResults = action.payload.companyLists;
        } else {
          state.searchResults = [];
        }
      })
      .addCase(searchCompanyListAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(searchCompanyListAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(getCompanyListAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCompanyListAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.companyLists = action.payload.companyLists; // ให้ข้อมูลเป็น action.payload.products
      })

      .addCase(getCompanyListAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addCompanyListAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addCompanyListAsync.fulfilled, (state, action) => {
        if (action.payload) {
          state.companyLists.push(action.payload.product); // Updated key

          state.status = "succeeded";
        }
      })

      .addCase(addCompanyListAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(editCompanyListAsync.fulfilled, (state, action) => {
        const editedCompanyList = action.payload;

        state.companyLists = state.companyLists.map((companyList) =>
          companyList.id === editedCompanyList.id
            ? editedCompanyList
            : companyList
        );
      })

      .addCase(deleteCompanyListAsync.fulfilled, (state, action) => {
        state.companyLists = state.companyLists.filter(
          (companyList) => companyList.id !== action.payload.id // Updated key
        );
      });
  },
});

export const { searchProducts } = productSlice.actions;
export default productSlice.reducer;
