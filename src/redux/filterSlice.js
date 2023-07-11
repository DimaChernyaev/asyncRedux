import { createSlice } from '@reduxjs/toolkit';

const inisialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: inisialState,
  reducers: {
    setFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
