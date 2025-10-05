import React from 'react'

// Styles and Assets
import './style/App.css'
import Home from "./components/home"
import homeIcon from './assets/home.svg'
import menuIcon from './assets/menu.svg'

// Components
import NavList from './components/tinyComp/navList'

// Data
import navData from './data/navLists'


function App() {

  const [open, setOpen] = React.useState(true);
  const [screen, setScreen] = React.useState("");

  


  function readClicked(param) {
    //setScreen(param);
    console.log("screen clicked: " + param);
  }

  function getScreenComponent(screen) {
    switch (screen) {
      case "Wordle":
        return //<Wordle />;
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
        
        
        <p>Evan Williams</p>
  
        
        <div id="home-bar">
              
          <img src={homeIcon} class="hb-item" id="home_icon" alt="..." />
          <p class="hb-item" >Home</p>
              
        </div>
          
        <div id="nav-box" className={open ? "open-navBox" : "closed-navBox"}>
          
          <img src={menuIcon} onClick={() => setOpen(!open)} class="nb-item" id="menu-icon" alt="..." />
  
        </div>
        
  
        {navLists}
              
      </div>

      {getScreenComponent(screen)}
      
      {/* <Home 
        navState = {open}
        setNavState = {() => setOpen(!open)}
      
      /> */}



      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}


    </>
  )
}

export default App
