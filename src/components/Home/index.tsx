import { Cards, Navbar } from 'components'
import { useState, type ReactElement } from 'react'
import { type IVersusCharacter, type ICharacter } from 'types'

interface Props {
  characters: ICharacter[]
}

const Home = ({ characters }: Props): ReactElement => {
  const [versus, setVersus] = useState<{
    ch1: IVersusCharacter
    ch2: IVersusCharacter
  }>({
    ch1: { id: 0, name: '', image: '' },
    ch2: { id: 0, name: '', image: '' }
  })

  console.log(versus)

  return (
    <div>
      <Navbar characters={characters} setVersus={setVersus} />
      <Cards versus={versus} />
    </div>
  )
}

export default Home
