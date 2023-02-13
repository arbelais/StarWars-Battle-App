import { type ReactElement } from 'react'

interface Props {
  image: string
  name: string
}

const Card = ({ image, name }: Props): ReactElement => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {image.length > 0 ? (
        <img className="rounded-t-lg" src={image} alt="character image" />
      ) : (
        <p>Select a character</p>
      )}
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
      </div>
    </div>
  )
}

export default Card
