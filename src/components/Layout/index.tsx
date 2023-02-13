import Navbar from 'components/Navbar'
import { type ReactNode, type ReactElement } from 'react'

const Layout = ({ children }: { children: ReactNode }): ReactElement => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main className="container w-full h-screen mx-auto">{children}</main>
    </div>
  )
}

export default Layout
