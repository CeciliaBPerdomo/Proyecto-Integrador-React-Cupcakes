// fredux/feature/theme/themeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isBlueMode: false
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isBlueMode = !state.isBlueMode;
    },
    setTheme: (state, action) => {
      state.isBlueMode = action.payload;
    }
  }
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;