import { type State } from "./state.js";
import { printPokemonEncounters } from "./helpers.js";

export async function commandExplore(state: State, ...args: string[]) {
  try {
    const locationArea = await state.PokeAPI.fetchLocation(args[0]);
    printPokemonEncounters(locationArea);
  } catch(err) {
    if (err instanceof Error) throw new Error(err.message);
  } 
}
