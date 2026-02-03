import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap } from "./command_map.js";
import { commandMapb } from "./command_map_b.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";
import { commandInspect } from "./command_inspect.js";
import { commandPokedex } from "./command_pokedex.js";

import type { CLICommand } from "./state.js";

export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "Exits the pokedex",
      callback: commandExit,
    },
    help: {
      name: "help",
      description: "Prints help",
      callback: commandHelp,
    },
    map: {
      name: "map",
      description: "display the names of 20 locations",
      callback: commandMap,
    },
    mapb: {
      name: "mapb",
      description: "display the names of the previous 20 locations",
      callback: commandMapb,
    },
    explore: {
      name: "explore",
      description: "explore the pokemons in a location",
      callback: commandExplore,
    },
    catch: {
      name: "catch",
      description: "try to catch a pokemon",
      callback: commandCatch,
    },
    inspect: {
      name: "inspect",
      description: "inspect a pokemon from the pokedex.",
      callback: commandInspect,
    },
    pokedex: {
      name: "pokedex",
      description: "display the names of the pokemons in the pokedex.",
      callback: commandPokedex,
    },
    // can add more commands here
  };
}
