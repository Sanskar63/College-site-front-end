import { useState } from 'react'
import { Navbar } from './components/Navbar'
import './App.css'
import About from './components/AboutUs'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Contacts from './components/Contacts'

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
