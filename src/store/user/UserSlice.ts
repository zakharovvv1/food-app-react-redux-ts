import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  email: null,
  token: null,
  id: null,
  name: null,
  order: [] as any[],
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
    updateUser: (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.name = action.payload.name;
    },
    setOrder: (state, action) => {
      console.log("Вызов слайса");
      state.order.push(action.payload);
    },
  },
});

export default UserSlice.reducer;
