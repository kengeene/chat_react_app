import { configureStore, createSlice } from '@reduxjs/toolkit';

const userProfile = createSlice({
  name: 'profile',
  initialState: {
    userName: null,
    avatar: null,
    userId: null,
  },
  reducers: {
    setProfileData: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.value = action.payload;
    },
    logoutProfile: (state) => {
      // eslint-disable-next-line no-console
      console.log('logging out');
      localStorage.removeItem('authenticated');
      // eslint-disable-next-line no-param-reassign
      state.value = {
        userName: null,
        avatar: null,
        userId: null,
      };
    },
  },
});

export const { setProfileData, logoutProfile } = userProfile.actions;

const store = configureStore({
  reducer: userProfile.reducer,
});

export default store;
