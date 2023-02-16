import { useState, type ChangeEvent, type ReactElement } from 'react'
import { type ICharacter } from 'types'

const Search = ({
  characters,
  translate,
  searchBox,
  setVersus
}: {
  characters: ICharacter[]
  translate: string
  searchBox: string
  setVersus: (arg1: any) => void
}): ReactElement => {
  const [results, setResults] = useState<ICharacter[]>([])

  function handleSearch(e: ChangeEvent<HTMLInputElement>): void {
    if (e.target.value.length < 1) {
      setResults([])
      return
    }
    const filter = characters.filter((ch) =>
      ch.name.toLowerCase().match(e.target.value)
    )
    setResults(filter)
  }

  function handleSearchSelection(e: any): void {
    const findCharacter = characters.find((ch) => ch.id === Number(e.target.id))

    if (findCharacter !== undefined) {
      setVersus({
        ch1: findCharacter,
        ch2: findCharacter
      })
    }

    const searchBar = document.getElementById(
      'search-navbar'
    ) as HTMLInputElement
    if (searchBar !== null) searchBar.value = ''
    setResults([])
  }

  return (
    <div className="flex items-center justify-center">
      <div className="relative flex flex-col items-center justify-center">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none z-0">
          <svg
            className="w-5 h-5 text-gray-500"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"></path>
          </svg>
          <span className="sr-only">Search icon</span>
        </div>
        <input
          type="text"
          id="search-navbar"
          className={`block pl-10 py-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:scale-150 focus:shadow-xxl transition-all ${translate}`}
          placeholder="Search..."
          onChange={handleSearch}
          onBlur={(e) => {
            if (e.target.value === '') setResults([])
          }}
        />
        {results.length > 0 ? (
          <div
            className={`border border-gray-200 gap-2 dark:bg-gray-800 dark:border-gray-700 bg-blue-50 absolute rounded-xl shadow-2xl w-[80vw] h-[30vh] px-16 py-10 overflow-y-scroll grid grid-cols-4 z-40 ${searchBox}`}>
            {results.map((r) => {
              return (
                <div
                  key={r.id}
                  className="h-24 flex flex-col items-center justify-center border py-2 border-gray-700 font-normal text-gray-700 dark:text-gray-400 text-center">
                  <button
                    onClick={handleSearchSelection}
                    className=""
                    id={String(r.id)}>
                    <img
                      id={String(r.id)}
                      src={r.image}
                      alt="character image"
                      className="rounded-full w-10 h-10 object-cover"
                    />{' '}
                  </button>
                  {r.name}
                </div>
              )
            })}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Search
