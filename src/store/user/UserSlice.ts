import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  email: null,
  token: null,
  id: null,
  name: null,
};
// Состояние корзины
export const UserSlice = createSlice({
  name: "UserSlice",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.accessToken;
      state.id = action.payload.uid;
      state.name = action.payload.displayName;
    },
    removeUser: (state, action) => {
      state.email = null;
      state.token = null;
      state.id = null;
    },
  },
});

export default UserSlice.reducer;