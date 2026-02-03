import { type ShallowLocations, type LocationArea } from "./pokeapi.js"

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
  for (const i in locations.results) {
    console.log(locations.results[i].name);
  }
}

export function printPokemonEncounters(locationArea: LocationArea) {
  console.log("Found Pokemon:")
  for (const i in locationArea.pokemon_encounters) {
    console.log(" - " + locationArea.pokemon_encounters[i].pokemon.name);
  }
}
