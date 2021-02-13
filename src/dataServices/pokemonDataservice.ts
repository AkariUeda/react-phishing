import PokeApi, { IPokemon } from 'pokeapi-typescript';

/**
 * API Library: https://github.com/Monbrey/pokeapi-typescript
 * PokeAPI: https://pokeapi.co/docs/v2#pokemon
 */

export const getPokemonInfo = async (
  pokemonName: string
): Promise<IPokemon> => {
  try {
    const result = await PokeApi.Pokemon.resolve(pokemonName);
    return result;
  } catch (err) {
    throw new Error(`PokeApi threw an error: ${err.message}`);
  }
};
