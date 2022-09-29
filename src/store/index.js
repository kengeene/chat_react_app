import { createSlice, configureStore } from "@reduxjs/toolkit";

const userProfile = createSlice({
  name: "profile",
  initialState: {
    userName: null,
    avatar: null,
    userId: null,
  },
  reducers: {
    setProfileData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setProfileData, decremented } = userProfile.actions;

const store = configureStore({
  reducer: userProfile.reducer,
});

export default store;
