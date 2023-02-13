import { type ReactElement } from 'react'
import { Card } from 'components'
import { type IVersus } from 'types'

// type Props = {}

const Cards = ({ versus }: { versus: IVersus }): ReactElement => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="border border-red-500">
        <Card image={versus.ch1.image} name={versus.ch1.name} />
      </div>
      <div className="flex items-center">
        <h2 className="text-4xl">VS</h2>
      </div>
      <div className="border border-red-500">
        <Card image={versus.ch2.image} name={versus.ch2.name} />
      </div>
    </div>
  )
}

export default Cards
