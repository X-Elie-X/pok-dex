import { configureStore } from '@reduxjs/toolkit';
import pokemonsReducer from './Homepage/Homepage';
import pokemonDetailSlice from './Details/Details';

const store = configureStore({
  reducer: {
    pokemon: pokemonsReducer,
    details: pokemonDetailSlice,
  },
});

export default store;
