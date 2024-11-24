import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  name: "car slice",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
