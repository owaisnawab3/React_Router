import { Routes, Route } from "react-router-dom"
import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"

function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
     <Route path="/contact" element={<Contact/>}></Route>
     <Route path="/about" element={<About/>}></Route>
     </Routes>
    </>
  )
}

export default App
