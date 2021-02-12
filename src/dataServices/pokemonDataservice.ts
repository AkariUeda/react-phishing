import PokeApi, { IPokemon } from 'pokeapi-typescript';

/**
 * API Library: https://github.com/Monbrey/pokeapi-typescript
 * PokeAPI: https://pokeapi.co/docs/v2#pokemon
 */

export const getPokemonInfo = async (pokemonId: number): Promise<IPokemon> => {
  try {
    const result = await PokeApi.Pokemon.resolve(pokemonId);
    return result;
  } catch (err) {
    throw new Error(`PokeApi threw an error: ${err}`);
  }
};
