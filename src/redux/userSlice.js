import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    user: {
      id: null,
      email: null,
      displayName: null,
    },
  },
  reducers: {
    userLogin(state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    userLogout(state, action) {
      state.user = {
        id: null,
        email: null,
        displayName: null,
      };
      state.isLoggedIn = false;
    },
  },
});

export const {
  actions: { userLogin, userLogout },
} = userSlice;
export default userSlice.reducer;
