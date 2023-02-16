import { type ReactElement } from 'react'
import { Card, RandomButton } from 'components'
import { type ICharacter, type IVersus } from 'types'

// type Props = {}

const Cards = ({
  characters,
  versus,
  setVersus
}: {
  characters: ICharacter[]
  versus: IVersus
  setVersus: (arg1: any) => void
}): ReactElement => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full">
        {versus.ch1.id !== 0 ? (
          <Card character={versus.ch1} />
        ) : (
          <RandomButton
            label={'Randomize'}
            versus={versus}
            characters={characters}
            setVersus={setVersus}
          />
        )}
      </div>
      <div className="flex items-center mx-4">
        <h2 className="text-4xl">VS</h2>
      </div>
      <div className="w-full">
        {versus.ch2.id !== 0 ? (
          <Card character={versus.ch2} />
        ) : (
          <RandomButton
            label={'Randomize'}
            versus={versus}
            characters={characters}
            setVersus={setVersus}
          />
        )}
      </div>
    </div>
  )
}

export default Cards
