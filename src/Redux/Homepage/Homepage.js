import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://api.pokemontcg.io/v2/cards/';

const initialState = {
  pokemons: [],
};

export const fetchData = createAsyncThunk('pokemons/fetchData', async () => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
});

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchData.fulfilled]: (state, action) => action.payload,
  },
});

export default pokemonSlice.reducer;
