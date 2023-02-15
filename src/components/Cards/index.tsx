import { type ReactElement } from 'react'
import { Card } from 'components'
import { type IVersus } from 'types'

// type Props = {}

const Cards = ({ versus }: { versus: IVersus }): ReactElement => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full">
        <Card character={versus.ch1} />
      </div>
      <div className="flex items-center mx-4">
        <h2 className="text-4xl">VS</h2>
      </div>
      <div className="w-full">
        <Card character={versus.ch2} />
      </div>
    </div>
  )
}

export default Cards
