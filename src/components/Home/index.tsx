import { Cards, Navbar, Search, List } from 'components'
import RandomButton from 'components/RandomButton'
import { useState, type ReactElement } from 'react'
import { type IVersusCharacter, type ICharacter } from 'types'

const initialVersusState = {
  id: 0,
  name: '',
  image: '',
  height: 0,
  mass: 0,
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
    <div className="w-full h-screen bg-gray-900">
      <Navbar characters={characters} versus={versus} setVersus={setVersus} />
      <main className="container bg-gray-900 w-full grid place-content-center">
        {versus.ch1.id !== 0 || versus.ch2.id !== 0 ? (
          <Cards versus={versus} />
        ) : (
          <div>
            <h2>Please, choose your characters.</h2>
            <Search />
            <h2>or generate a Random Battle</h2>
            <RandomButton characters={characters} setVersus={setVersus} />
            <button
              type="button"
              onClick={() => {
                setToggle(!toggle)
              }}>
              Show all characters
            </button>
            {toggle ? (
              <div className="w-9/12">
                <List characters={characters} />{' '}
              </div>
            ) : null}
          </div>
        )}
      </main>
    </div>
  )
}

export default Home
