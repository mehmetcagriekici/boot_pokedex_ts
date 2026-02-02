import { exit } from 'node:process';
import { type State } from "./state.js"

export function cleanInput(input: string): string[] {
  return input.trim().split(" ").reduce((acc: string[], word): string[] => word ? [...acc, word.toLowerCase()] : acc, []);
}


export function startREPL(state: State) {
  state.rl.prompt();

  state.rl.on('line', async (line) => {
    try {
      if (!line.trim()) {
        state.rl.prompt();
      }
    
      const args = cleanInput(line.trim());
      const cmd = args[0];

      if (state.commands[cmd]) {
        await state.commands[cmd].callback(state);
      } else {
        console.log("Unknown command");
      }
    } catch(err) {
      if (err instanceof Error) {
	console.log(err.message)
      }
    }
    
    state.rl.prompt();
  }).on('close', () => {
    exit(0);
  })
}
