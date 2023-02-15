import { type ReactElement } from 'react'
import { type IVersusCharacter } from 'types'

const Card = ({ character }: { character: IVersusCharacter }): ReactElement => {
  return (
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        className="rounded-t-lg object-cover"
        src={character.image}
        alt="character image"
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {character.name}
        </h5>
      </div>
    </div>
  )
}

export default Card
