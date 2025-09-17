import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "request",
  initialState: null,
  reducers: {
    addRequest: (state, action) => {
      return action.payload;
    },
    removeRequest: () => null,
  },
});

export default requestSlice.reducer;
export const { addRequest, removeRequest } = requestSlice.actions;
