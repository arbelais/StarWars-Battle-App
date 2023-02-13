import { useEffect, useState, type ReactElement } from 'react'
import { Home } from 'components'
import fetchData from 'utils/fetchData'
import { type ICharacter } from 'types'

function App(): ReactElement {
  const [data, setData] = useState<ICharacter[]>()

  useEffect(() => {
    fetchData()
      .then((res) => {
        setData(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return <Home characters={data} />
}

export default App
