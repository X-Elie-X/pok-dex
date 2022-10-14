import pokemonsReducer from '../Redux/Homepage/Homepage';
import pokemonDetailSlice from '../Redux/Details/Details';

describe('pokemonsReducer', () => {
  it('retun the Initial State', () => {
    const expected = { pokemons: [] };
    const result = pokemonsReducer(undefined, { pokemons: [] });

    expect(result).toEqual(expected);
  });
});

describe('pokemonDetailSlice', () => {
  it('retun the Initial State', () => {
    const expected = { pokemons: [] };
    const result = pokemonDetailSlice(undefined, { pokemons: [] });

    expect(result).toEqual(expected);
  });
});
