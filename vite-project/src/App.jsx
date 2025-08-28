import { useState } from 'react'
import Navbar from './Navbar'
import Course from './Course'
import Footer from './Footer'
import './App.css'
import HTML from './assets/HTML.png'
import CSS from './assets/CSS.jpg'
import JS from './assets/JS.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Course name="HTML Full Course" price="$199" image={HTML} />
      <Course name="CSS Full Course" price="$199" image={CSS}/>
      <Course name="JS Full Course" price="$199" image={JS}/>
    </>
  )
}

export default App
