import { type ReactElement } from 'react'
import { type ICharacter } from 'types'

// type Props = {}

const List = ({
  characters,
  setToggle
}: {
  characters: ICharacter[]
  setToggle: (arg1: any) => void
}): ReactElement => {
  return (
    <div className="backdrop-blur-md bg-black bg-opacity-60 absolute top-0 left-0 right-0 z-50 w-full flex items-center justify-center p-4 overflow-hidden md:inset-0">
      <div className="h-[80vh] grid place-content-center relative w-full bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 px-10 py-6 max-w-xl max-h-max rounded-lg shadow-xl">
        <button
          className="absolute text-center grid place-content-center top-4 right-4 text-xl font-bold w-6 h-6 rounded-full hover:bg-zinc-100 hover:text-gray-700 transition-all"
          onClick={() => {
            setToggle(false)
          }}>
          X
        </button>
        <ul className="grid grid-cols-4 overflow-y-scroll">
          {characters.map((ch) => {
            return (
              <li
                key={ch.id}
                className="flex flex-col items-center justify-center gap-2 py-4">
                <img
                  src={ch.image}
                  alt="image"
                  className="w-16 h-16 rounded-full object-cover object-top"
                />
                <span className="text-xs text-gray-400 text-center">
                  {ch.name}
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default List
