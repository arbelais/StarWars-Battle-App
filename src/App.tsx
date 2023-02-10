import { Cards } from 'components'
import React, { type ReactElement } from 'react'

function App(): ReactElement {
  return (
    <div className="w-full h-screen grid place-content-center">
      <h1 className="text-6xl text-slate-200 font-bold">StarWars Battle App</h1>
      <Cards />
    </div>
  )
}

export default App
