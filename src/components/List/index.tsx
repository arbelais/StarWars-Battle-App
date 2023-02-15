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
    <div className="backdrop-blur-md bg-black bg-opacity-60 absolute top-0 left-0 right-0 z-50 w-full flex items-center justify-center p-4 overflow-x-hidden overflow-y-auto md:inset-0 md:h-full">
      <div className="relative w-full bg-zinc-50 text-black px-10 py-6 max-w-xl max-h-max rounded-xl shadow-xl md:h-auto ">
        <button
          onClick={() => {
            setToggle(false)
          }}>
          x
        </button>
        <ul className="w-full h-96 border border-red-500 overflow-y-auto">
          {characters.map((ch) => {
            return <li key={ch.id}>{ch.name}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default List
