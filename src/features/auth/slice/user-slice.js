// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const getUserLoginAsync = createAsyncThunk(
//   "usersSlice/getUserListAsync",
//   async (_, thunkAPI) => {
//     try {
//       const token = localStorage.getItem("accessToken");
//       const response = await fetch(
//         "http://localhost:9999/auth/getloggedinuser",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (response.ok) {
//         const loggedInUser = await response.json();
//         return { loggedInUser };
//       }
//     } catch (error) {
//       console.error("Fetch error:", error);
//       throw error;
//     }
//   }
// );

// const usersSlice = createSlice({
//   name: "usersSlice",
//   initialState: {
//     status: "idle",
//     usersList: {},
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getUserLoginAsync.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(getUserLoginAsync.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.usersList = action.payload.loggedInUser;
//       })
//       .addCase(getUserLoginAsync.rejected, (state, action) => {
//         state.status = "failed get users";
//         state.error = action.error.message;
//       });
//   },
// });

// export const { searchProducts } = usersSlice.actions;
// export default usersSlice.reducer;
