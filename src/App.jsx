import { useState } from 'react'
import { Navbar } from './components/utils/Navbar'
import './App.css'
import About from './components/utils/Announcement'
import Cards from './components/utils/Cards'
import Footer from './components/utils/Footer'
import Contacts from './components/utils/Contacts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <About  />  */}
      <Contacts />
    </>
  )
}

export default App
