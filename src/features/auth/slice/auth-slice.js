import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "../../../api/auth-api";
import { setAccessToken } from "../../../utils/localstorage";

const initialState = {
  isAuthenticated: false,
  error: null,
  loading: false,
  isInitialized: false, // เพิ่ม property นี้
};

export const registerAsync = createAsyncThunk(
  "auth/registerAync",
  async (input, thunkApi) => {
    try {
      const res = await authService.register(input);
      setAccessToken(res.data.accessToken);
      return;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (input, thunkApi) => {
  const res = await authService.login(input);
  setAccessToken(res.data.accessToken);
  thunkApi.dispatch(authSlice.actions.setInitialized(true)); // เพิ่มบรรทัดนี้
});

export const fetchMe = createAsyncThunk("auth/fetchMe", async (_, thunkApi) => {
  try {
    const res = await authService.fetchMe();
    return res.data.user;
  } catch (err) {
    return thunkApi.rejectWithValue(err.response.data.message);
  }
});
const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
    },
    setInitialized: (state, action) => {
      state.isInitialized = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(registerAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerAsync.fulfilled, (state) => {
        state.isAuthenticated = true;
        state.loading = false;
      })
      .addCase(registerAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state) => {
        state.isAuthenticated = true;
        state.loading = false;
      })
      .addCase(login.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchMe.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMe.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
        state.initialLoading = false;
      })
      .addCase(fetchMe.rejected, (state, action) => {
        state.error = action.payload;
        state.initialLoading = false;
      }),
});

export default authSlice.reducer;
export const { logout, setInitialized } = authSlice.actions;
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import * as authService from "../../../api/auth-api";
// import { setAccessToken } from "../../../utils/localstorage";

// const initialState = {
//   isAuthenticated: false,
//   error: null,
//   loading: false,
// };
// export const registerAsync = createAsyncThunk(
//   "auth/registerAync",
//   async (input, thunkApi) => {
//     try {
//       const res = await authService.register(input);
//       setAccessToken(res.data.accessToken);
//       return;
//     } catch (err) {
//       return thunkApi.rejectWithValue(err.response.data.message);
//     }
//   }
// );

// export const login = createAsyncThunk("auth/login", async (input) => {
//   const res = await authService.login(input);
//   setAccessToken(res.data.accessToken);
// });

// export const fetchMe = createAsyncThunk("auth/fetchMe", async (_, thunkApi) => {
//   try {
//     const res = await authService.fetchMe();
//     return res.data.user;
//   } catch (err) {
//     return thunkApi.rejectWithValue(err.response.data.message);
//   }
// });

// const authSlice = createSlice({
//   name: "auth",
//   initialState: initialState,
//   reducers: {
//     logout: (state) => {
//       state.isAuthenticated = false;
//     },
//     updateProfileImage: (state, action) => {
//       state.user.profileImage = action.payload;
//     },
//   },
//   extraReducers: (builder) =>
//     builder
//       .addCase(registerAsync.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(registerAsync.fulfilled, (state) => {
//         state.isAuthenticated = true;
//         state.loading = false;
//       })
//       .addCase(registerAsync.rejected, (state, action) => {
//         state.error = action.payload;
//         state.loading = false;
//       })
//       .addCase(login.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(login.fulfilled, (state) => {
//         state.isAuthenticated = true;
//         state.loading = false;
//       })
//       .addCase(login.rejected, (state) => {
//         state.loading = false;
//       })
//       .addCase(fetchMe.pending, (state) => {
//         state.initialLoading = true;
//       })
//       .addCase(fetchMe.fulfilled, (state, action) => {
//         state.loading = false;
//         state.isAuthenticated = true;
//         state.user = action.payload;
//         state.initialLoading = false;
//       })
//       .addCase(fetchMe.rejected, (state, action) => {
//         state.error = action.payload;
//         state.initialLoading = false;
//       }),
// });

// export default authSlice.reducer;
// export const { updateProfileImage, logout } = authSlice.actions;
