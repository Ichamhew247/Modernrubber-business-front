import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "../../../api/auth-api";
import { setAccessToken } from "../../../utils/localstorage";

const initialState = {
  isAuthenticated: false,
  error: null,
  loading: false,
};
export const registerAsync = createAsyncThunk(
  "auth/registerAync",
  async (input, thunkApi) => {
    try {
      const res = await authService.register(input);
      //   console.log(res);
      setAccessToken(res.data.accessToken);
      return;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (input) => {
  const res = await authService.login(input);
  setAccessToken(res.data.accessToken);
});

// createAsyncThunk make
// auth/registerAsync/pending
// auth/registerAsync/rejected
// auth/registerAsync/fulfilled
const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
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
      }),
});

export default authSlice.reducer;
