import { createInterface, type Interface } from "readline";
import { stdin as input, stdout as output } from 'node:process';
import { getCommands } from "./registry_commands.js"
import { PokeAPI } from "./pokeapi.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => Promise<void>;
};

export type State = {
  rl: Interface;
  commands: Record<string, CLICommand>;
  PokeAPI: PokeAPI;
  nextOffset: number;
  prevOffset: number;
};

export function initState(): State {
  return {
    rl: createInterface({input, output, prompt: "Pokedex > "}),
    commands: getCommands(),
    PokeAPI: new PokeAPI(),
    nextOffset: 0,
    prevOffset: 0,
  }
}
