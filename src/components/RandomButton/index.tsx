import { type ReactElement } from 'react'
import { type IVersus, type ICharacter } from 'types'
import getRandomBattle from 'utils/getRandomBattle'

const RandomButton = ({
  label,
  characters,
  versus,
  setVersus
}: {
  label: string
  characters: ICharacter[]
  versus: IVersus
  setVersus: (arg1: any) => void
}): ReactElement => {
  const selectARandomBattle = (): void => {
    const [firstNumber, secondNumber] = getRandomBattle(characters.length)

    if (characters.length > 1) {
      if (label === 'Random Battle') {
        setVersus({
          ch1: characters[firstNumber],
          ch2: characters[secondNumber]
        })
        return
      }

      if (versus.ch1.id === 0 && versus.ch1.id !== firstNumber) {
        const idx = versus.ch1.id === firstNumber ? secondNumber : firstNumber
        setVersus({
          ...versus,
          ch1: characters[idx]
        })
        return
      }
      if (versus.ch2.id === 0) {
        const idx = versus.ch1.id === firstNumber ? secondNumber : firstNumber
        setVersus({
          ...versus,
          ch2: characters[idx]
        })
      }
    }
  }

  return (
    <button
      type="button"
      onClick={selectARandomBattle}
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
      {label}
    </button>
  )
}

export default RandomButton
