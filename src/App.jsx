import { useState } from 'react'
import './App.css'
import Header from './Header/Header'
import SectionPicture from './SectionPicture/SectionPicture'
import SectionProjects from './SectionProjects/SectionProjects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <SectionPicture/>
      <hr/>
      <SectionProjects/>
      <hr/>
    </>
  )
}

export default App
