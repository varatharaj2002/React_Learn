import { useState } from 'react'
import Navbar from './Navbar'
import Course from './Course'
import Footer from './Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Course/>
      <Footer/>
     
    </>
  )
}

export default App
