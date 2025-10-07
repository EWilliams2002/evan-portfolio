import React from 'react'

// Styles and Assets
import './style/App.css'
import Home from "./components/home"
import homeIcon from './assets/home.svg'
import navIcon from './assets/back.svg'

// Components
import NavList from './components/tinyComp/navList'
import Wordle from './components/wordle'

// Data
import navData from './data/navLists'


function App() {

  const [open, setOpen] = React.useState(true);
  const [screen, setScreen] = React.useState("");

  


  function readClicked(param) {
    setScreen(param);
    console.log("screen clicked: " + param);
  }

  function getScreenComponent(screen) {
    switch (screen) {
      case "Wordle":
        return <Wordle />;
      case "Photography":
        return //<Photography />;
      default:
        return <Home 
                  navState={open} 
                  setNavState={() => setOpen(!open)} 
                />;
  }
}

  const navLists = navData.map((entry) => {
    return (
      <NavList
        key={entry.id}
        titleName = {entry.titleName}
        items = {entry.items}
        clicked = {readClicked}
      />
    )
  })

  return (
    <>





      <div id="nav" className={open ? "open-nav" : "closed-nav"}>
        
        
        <p id="myName">Evan Williams</p>
  
        
        <div id="home-bar" onClick={() => {setScreen(""); readClicked("Home"); setOpen(true)}}>
              
          <img src={homeIcon} class="hb-item" id="home_icon" alt="..." />
          <p class="hb-item" >Home</p>
              
        </div>
          
        <div id="nav-box" onClick={() => setOpen(!open)} className={open ? "open-navBox" : "closed-navBox"}>
          
          <img src={navIcon} class={open ? "open-navIcon" : "closed-navIcon"} id="nav-icon" alt="..." />
  
        </div>
        
  
        {navLists}
              
      </div>



      

      



      {getScreenComponent(screen)}

      <div id="icon-attr">

          Icons by <a href="https://icons8.com/" style={{ textDecoration: "underline" }}>Icons8</a>

      </div>



        



      
      
    
    </>
  )
}

export default App
