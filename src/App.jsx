import React from 'react'


import './style/App.css'
import Nav from "./components/nav"
import Home from "./components/home"

function App() {
  // const [count, setCount] = useState(0)

  const [open, setOpen] = React.useState(true);

  return (
    <>
    
      <Nav 
        navState = {open}
        setNavState = {() => setOpen(!open)}
      
      />
      
      <Home 
        navState = {open}
        setNavState = {() => setOpen(!open)}
      
      />



      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}


    </>
  )
}

export default App
