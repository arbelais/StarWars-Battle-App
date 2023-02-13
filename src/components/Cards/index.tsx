import { type ReactElement } from 'react'
import { Card } from 'components'

// type Props = {}

const Cards = (): ReactElement => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="border border-red-500">
        <Card />
      </div>
      <div className="border border-red-500">
        <Card />
      </div>
    </div>
  )
}

export default Cards
