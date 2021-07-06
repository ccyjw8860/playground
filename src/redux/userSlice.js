import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    user: {
      id: null,
      email: null,
      displayName: null,
    },
  },
  reducers: {
    userLogin(state, action) {
      state.user = action.payload;
    },
    userLogout(state, action) {
      stat.user = {
        id: null,
        email: null,
        displayName: null,
      };
    },
  },
});

export const {
  actions: { userLogin, userLogout },
} = userSlice;
export default userSlice.reducer;
