import { Cards, Navbar, Search, List, RandomButton } from 'components'
import { useState, type ReactElement } from 'react'
import { type IVersusCharacter, type ICharacter } from 'types'

const initialVersusState = {
  id: 0,
  name: '',
  image: '',
  height: 0,
  mass: 0,
  cybernetics: '',
  gender: '',
  homeworld: '',
  wiki: ''
}

const Home = ({ characters }: { characters: ICharacter[] }): ReactElement => {
  const [toggle, setToggle] = useState(false)
  const [versus, setVersus] = useState<{
    ch1: IVersusCharacter
    ch2: IVersusCharacter
  }>({
    ch1: initialVersusState,
    ch2: initialVersusState
  })

  return (
    <div className="w-full h-screen bg-gray-900 transition-all grid place-content-center">
      <Navbar characters={characters} versus={versus} setVersus={setVersus} />
      <main className="container bg-gray-900 w-full">
        {versus.ch1.id !== 0 || versus.ch2.id !== 0 ? (
          <Cards versus={versus} />
        ) : (
          <div className="flex flex-col">
            <div className="flex flex-col items-center gap-1">
              <h2 className="text-xl">Please, choose your characters.</h2>
              <Search
                setVersus={setVersus}
                characters={characters}
                translate={'focus:-translate-y-28'}
                searchBox={'top-8 -translate-x-4'}
              />
              <button
                type="button"
                className="text-blue-300 hover:bg-blue-200 hover:bg-opacity-20 hover:text-blue-400 focus:ring-4 underline focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 mb-4 transition-all"
                onClick={() => {
                  setToggle(!toggle)
                }}>
                See available characters
              </button>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-xl">or generate a Random Battle.</h2>
              <RandomButton characters={characters} setVersus={setVersus} />
              {toggle ? (
                <List characters={characters} setToggle={setToggle} />
              ) : null}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default Home
