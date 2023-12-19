import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componnets/navbar'
import Main from './componnets/main'


function App() {
  const [dark, setDark] = useState(true)

  function toggleDark(){
    setDark((prevTheme) => !prevTheme)
  }


  return (
    <>
      <Navbar darkMode={dark} toggleDarkMode={toggleDark}/>
      <Main darkMode={dark}/>
    </>
  )
}

export default App
