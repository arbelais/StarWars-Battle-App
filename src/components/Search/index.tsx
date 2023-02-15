import { useState, type ChangeEvent, type ReactElement } from 'react'
import { type ICharacter } from 'types'

const Search = ({ characters }: { characters: ICharacter[] }): ReactElement => {
  const [results, setResults] = useState<ICharacter[]>([])

  function handleSearch(e: ChangeEvent<HTMLInputElement>): ICharacter[] {
    const filter = characters.filter((ch) =>
      ch.name.toLowerCase().match(e.target.value)
    )
    console.log(filter)
    setResults(filter)

    return filter
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
          className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:-translate-y-28 focus:scale-150 focus:shadow-xxl transition-all"
          placeholder="Search..."
          onChange={handleSearch}
          onBlur={() => {
            setResults([])
          }}
        />
        {results.length > 0 ? (
          <div className="bg-blue-50 w-5/6 min-h-96 h-max max-h-96 px-16 py-10 overflow-y-scroll grid grid-cols-4 z-40">
            {results.map((r) => {
              return (
                <div
                  className="border border-black text-blue-900 flex items-center justify-center"
                  key={r.id}>
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
