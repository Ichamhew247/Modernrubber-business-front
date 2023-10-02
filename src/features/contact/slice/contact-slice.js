import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "../../../api/contact-api";

const initialState = {
  email: "",
  error: null,
  loading: false,
};

export const contactAsync = createAsyncThunk(
  "contact/contactAsync",
  async (input, thunkApi) => {
    try {
      await authService.contact(input);
      // const resFetchMe = await authService.fetchMe();
      // return resFetchMe.data.user;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState: initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { setEmail } = contactSlice.actions;

export default contactSlice.reducer;
