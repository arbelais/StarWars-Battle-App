import { Layout, Cards } from 'components'
import { useState, type ReactElement } from 'react'
import { type ICharacter } from 'types'

interface Props {
  characters: ICharacter[] | undefined
}

const Home = ({ characters }: Props): ReactElement => {
  const [versus, setVersus] = useState()

  return (
    <Layout>
      <Cards />
    </Layout>
  )
}

export default Home
