import { type ReactElement } from 'react'
import { type IVersus, type ICharacter } from 'types'
import { Search, RandomButton } from 'components'
import StarWarsLogo from 'assets/g239.png'

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
    <nav className="bg-white border-gray-200 mb-5 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container flex flex-col gap-2 flex-wrap items-center justify-center mx-auto">
        <img src={StarWarsLogo} alt="starwars logo" className="w-48" />
        <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
          Battle App
        </span>

        <div className="flex items-center justify-center gap-3">
          {versus.ch1.id !== 0 ? (
            <>
              <Search
                characters={characters}
                translate={'focus:translate-x-[30%]'}
                searchBox={'top-20 translate-x-12'}
                setVersus={setVersus}
              />
              <RandomButton characters={characters} setVersus={setVersus} />
            </>
          ) : null}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
