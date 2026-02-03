import { type State } from "./state.js";

export async function commandCatch(state: State, ...args: string[]) {
  try {
    console.log(`Throwing a Pokeball at ${args[0]}...`);
    const pokemon = await state.PokeAPI.fetchPokemon(args[0]);
    const dice = Math.random() * 400;
    if (dice > pokemon.base_experience) {
      state.pokedex[pokemon.name] = pokemon;
    } else {
      console.log("you have not caught that pokemon");
    }
  } catch(err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
  }
}
