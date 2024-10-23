import { useState } from 'react'
import './App.css'
import Header from './Header/Header'
import SectionPicture from './SectionPicture/SectionPicture'
import SectionProjects from './SectionProjects/SectionProjects'
import AboutMe from './AboutMe/AboutMe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <SectionPicture/>
      <hr/>
      <AboutMe/>
      <hr/>
      <SectionProjects/>
    </>
  )
}

export default App
