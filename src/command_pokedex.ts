import { type State } from "./state.js";

export async function commandPokedex(state: State) {
  for (const k in state.pokedex) {
    console.log(k);
  }
}
