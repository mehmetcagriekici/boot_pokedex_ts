import { createInterface, type Interface } from "readline";
import { stdin as input, stdout as output } from 'node:process';
import { getCommands } from "./registry_commands.js"
import { PokeAPI, type SinglePokemon} from "./pokeapi.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...args: string[]) => Promise<void>;
};

export type State = {
  rl: Interface;
  commands: Record<string, CLICommand>;
  PokeAPI: PokeAPI;
  nextLocationsURL: string;
  prevLocationsURL: string;
  pokedex: Record<string, SinglePokemon>;
};

export function initState(): State {
  return {
    rl: createInterface({input, output, prompt: "Pokedex > "}),
    commands: getCommands(),
    PokeAPI: new PokeAPI(5000),
    nextLocationsURL: "",
    prevLocationsURL: "",
    pokedex: {},
  }
}
