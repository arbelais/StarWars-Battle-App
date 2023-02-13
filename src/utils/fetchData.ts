import { type ICharacter } from 'types'

export default async function fetchData(): Promise<ICharacter[]> {
  const data = await fetch('https://akabab.github.io/starwars-api/api/all.json')

  const characters = await data.json()

  return characters
}
