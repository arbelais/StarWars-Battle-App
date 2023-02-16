import { type ReactElement } from 'react'
import { type IVersusCharacter } from 'types'

const Card = ({ character }: { character: IVersusCharacter }): ReactElement => {
  return (
    <div
      style={{ backgroundImage: `url(${character.image})` }}
      className="w-[300px] h-[400px] flex justify-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 bg-cover bg-center bg-no-repeat group overflow-hidden relative">
      <div className="w-full h-full flex flex-col justify-end group-hover:bg-black/50 bg-black/0 transition-all rounded-lg">
        <div className="w-full group-hover:h-full p-8 backdrop-blur-sm bg-black/60 group-hover:rounded-lg transition-all">
          <h5 className="mb-2 text-shadow text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
            {character.name}
          </h5>
          <div className="w-full absolute left-0 top-32 opacity-0 group-hover:opacity-100 flex flex-col items-center gap-5">
            <p className="capitalize">Gender: {character.gender}</p>
            <p className="capitalize">Mass: {character.mass}</p>
            <p className="capitalize">Height: {character.height}</p>
            <p className="capitalize">
              Cybernetics:{' '}
              {character.cybernetics !== undefined
                ? character.cybernetics
                : 'None'}
            </p>
            <p className="capitalize">Homeworld: {character.homeworld}</p>
            <a
              href={character.wiki}
              target="_blank"
              rel="noreferrer"
              className="text-blue-300 hover:text-blue-400 focus:ring-4 underline focus:ring-blue-300 font-medium rounded-lg text-sm transition-all">
              Go to the Wiki
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
