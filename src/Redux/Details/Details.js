import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://api.pokemontcg.io/v2/cards';

const initialState = {
  pokemons: [],
};

export const fetchDetailsData = createAsyncThunk('pokemons/fetchData', async (id) => {
  const res = await fetch(`${url}/${id}`);
  const data = await res.json();

  return data;
});

const pokemonDetailSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchDetailsData.fulfilled]: (state, action) => action.payload,
  },
});

export default pokemonDetailSlice.reducer;
