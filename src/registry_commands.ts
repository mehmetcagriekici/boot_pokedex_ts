import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap } from "./command_map.js";
import { commandMapb } from "./command_map_b.js";

import type { CLICommand } from "./state.js"

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
    }
    // can add more commands here
  };
}
