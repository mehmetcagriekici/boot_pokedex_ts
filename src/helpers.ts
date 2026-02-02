import { type ShallowLocations } from "./pokeapi.js"

export async function getData(url: string) {
  try {
    const resp = await fetch(url)
    const data = await resp.json()
    return data
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message)
    }
  }
}

export function printLocations(locations: ShallowLocations) {
  for (const name in locations.results) {
    console.log(name);
  }
}
