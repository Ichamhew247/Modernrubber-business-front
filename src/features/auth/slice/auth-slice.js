// auth-slice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "../../../api/auth-api";
import { setAccessToken } from "../../../utils/localstorage";

const initialState = {
  isAuthenticated: false,
  // role: null,
  name: null,
  status: "idle",
  error: null,
};

export const registerAsync = createAsyncThunk(
  "auth/registerAsync",
  async (input, thunkApi) => {
    try {
      const res = await authService.register(input);
      setAccessToken(res.data.accessToken);
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (input, thunkApi) => {
  try {
    const res = await authService.login(input);
    return res.data.role;
    // return res.data.role;
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
      state.role = null;
      // state.username = null;
    },
    setInitialized: (state, action) => {
      state.isInitialized = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(registerAsync.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.loading = false;
      })
      .addCase(registerAsync.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.status = "succeeded";
        // state.name = action.payload;
        state.role = action.payload;
        // state.username = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      }),
});

export const { logout, setInitialized } = authSlice.actions;
export const selectRole = (state) => state.auth.role; // Define the selector
// export const selectRole = (state) => state.auth.role; // Define the selector
// export const selectUsername = (state) => state.auth.username; // Define the selector
export default authSlice.reducer;
