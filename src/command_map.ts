import { type State } from "./state.js";
import { printLocations } from "./helpers.js";

export async function commandMap(state: State) {
  try {
    const locations = await state.PokeAPI.fetchLocations(state.nextLocationsURL);
    
    state.nextLocationsURL = locations.next;
    state.prevLocationsURL = locations.previous;
    printLocations(locations);    
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
  }
}
