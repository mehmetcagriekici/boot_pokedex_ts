import { exit } from 'node:process';

export async function commandExit() {
  console.log("Closing the Pokedex... Goodbye!");
  exit(0);
}
