import { type ReactElement } from 'react'
import { type IVersus, type ICharacter } from 'types'
import { Search } from 'components'
import RandomButton from 'components/RandomButton'

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
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          StarWars Battle App
        </span>

        {versus.ch1.id !== 0 ? (
          <>
            <Search />
            <div className="md:order-2">
              <RandomButton characters={characters} setVersus={setVersus} />
            </div>
          </>
        ) : null}
      </div>
    </nav>
  )
}

export default Navbar
