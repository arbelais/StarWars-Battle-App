import { type ReactElement } from 'react'
import { type IVersus, type ICharacter } from 'types'
import { Search, RandomButton } from 'components'

const Navbar = ({
  characters,
  versus,
  setVersus
}: {
  characters: ICharacter[]
  versus: IVersus
  setVersus: (arg1: any) => void
}): ReactElement => {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container flex flex-col gap-10 flex-wrap items-center justify-center mx-auto">
        <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
          StarWars Battle App
        </span>

        <div className="flex items-center justify-center gap-3">
          {versus.ch1.id !== 0 ? (
            <>
              <Search />
              <RandomButton characters={characters} setVersus={setVersus} />
            </>
          ) : null}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
