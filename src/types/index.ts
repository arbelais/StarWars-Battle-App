export interface ICharacter {
  id: number
  name: string
  height: number
  mass: number
  gender: string
  homeworld: string
  wiki: string
  image: string
  born: number
  bornLocation: string
  died: number
  diedLocation: string
  species: string
  hairColor: string
  eyeColor: string
  skinColor: string
  cybernetics: string
  affiliations: string[]
  masters: string[]
  apprentices: string[]
  formerAffiliations?: string[]
}

export interface IVersusCharacter {
  id: number
  name: string
  image: string
  height: number
  mass: number
  gender: string
  cybernetics: string
  homeworld: string
  wiki: string
}

export interface IVersus {
  ch1: IVersusCharacter
  ch2: IVersusCharacter
}
