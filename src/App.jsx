import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Form from './components/Form'
import FormAdmins from './components/FormAdmins'

function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const renderCount = useRef(0);
  const setCountState = () => {
    console.log("Rednered again, STATE variable");
    setCount(() => count + 1);
  }

  const setCountRef = () => {
    console.log("Rednered again, REF variable");
    countRef.current++;
  }
  console.log("Component rendered", );
  return (
    <>
      Count state  = {count}
      Count rewf = {countRef.current}
     <Navbar/>
     
     <Routes>
        <Route path="/" element={<Home setCountState={setCountState} setCountRef={setCountRef}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/form" element={<Form/>} />
        <Route path="/formAdmins" element={<FormAdmins/>} />
        </Routes>

    </>
  )
}

export default App
