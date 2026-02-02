import { type State } from "./state.js";
import { printLocations } from "./helpers.js";

export async function commandMap(state: State) {
  try {
    const locations = await state.PokeAPI.fetchLocations(state.nextOffset);
    state.nextOffset += 20;
    printLocations(locations);    
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
  }
}
