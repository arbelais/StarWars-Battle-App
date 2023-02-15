import { type ReactElement } from 'react'
import { type ICharacter } from 'types'
import getRandomBattle from 'utils/getRandomBattle'

const RandomButton = ({
  characters,
  setVersus
}: {
  characters: ICharacter[]
  setVersus: (arg1: any) => void
}): ReactElement => {
  const selectARandomBattle = (): void => {
    const [firstNumber, secondNumber] = getRandomBattle(characters.length)

    if (characters.length > 1) {
      setVersus({
        ch1: characters[firstNumber],
        ch2: characters[secondNumber]
      })
    }
  }

  return (
    <button
      type="button"
      onClick={selectARandomBattle}
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
      Random Battle
    </button>
  )
}

export default RandomButton
