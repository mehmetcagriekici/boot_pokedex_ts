import { type State } from "./state.js";

export async function commandInspect(state: State, ...args: string[]) {
  if (!state.pokedex[args[0]]) {
    console.log(`${args[0]} does not exist in the pokedex.`);
    return;
  }
  
  const pokemon = state.pokedex[args[0]];
  console.log(`Name: ${pokemon.name}`);
}
