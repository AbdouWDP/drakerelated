import { createSlice } from "@reduxjs/toolkit";

const albumReducer = createSlice({
  name: "albumReducer",
  initialState: 0,
  reducers: {
    show: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { show } = albumReducer.actions;

export default albumReducer.reducer;
