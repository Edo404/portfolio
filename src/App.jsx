import { useState } from 'react'
import './App.css'
import Header from './Header/Header'
import SectionPicture from './SectionPicture/SectionPicture'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <SectionPicture/>
    </>
  )
}

export default App
