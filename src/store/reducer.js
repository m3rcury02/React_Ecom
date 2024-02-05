import { createSlice, configureStore } from '@reduxjs/toolkit';
import initialState from 'db.json';

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    register: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    login: (state, action) => {
      state.user = action.payload;
    },
    addToFavourites: (state, action) => {
      state.favourites = [...state.favourites, action.payload];
    },
    removeFromFavourites: (state, action) => {
      state.favourites = state.favourites.filter(product => product.id !== action.payload.id);
    },
    removeFromOrders: (state, action) => {
      state.orders = state.orders.filter(product => product.id !== action.payload.id);
    },
    addToOrders: (state, action) => {
      state.orders = [...state.orders, ...action.payload];
      state.favourites = [];
    },
  },
});

export default configureStore({ reducer: slice.reducer });
export const { register, login, addToFavourites, removeFromFavourites, removeFromOrders, addToOrders } = slice.actions;
