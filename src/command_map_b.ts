import { type State } from "./state.js";
import { printLocations } from "./helpers.js";

export async function commandMapb(state: State) {
  try {
    if (!state.prevLocationsURL) {
      console.log("you're on the first page")
      return
    }
    const locations = await state.PokeAPI.fetchLocations(state.prevLocationsURL);
    state.nextLocationsURL = locations.next;
    state.prevLocationsURL = locations.previous;
    printLocations(locations);
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
  }
}
