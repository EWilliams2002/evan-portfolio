import React from 'react'

// Styles and Assets
import './style/App.css'
import Home from "./components/home"
import homeIcon from './assets/home.svg'
import navIcon from './assets/back.svg'
import logo from './assets/LOGO TRAN.svg'
import linkedinIcon from './assets/Linkedin.svg'
import githubIcon from './assets/GitHub.svg'

// Components
import NavList from './components/tinyComp/navList'
import Wordle from './components/wordle'

// Data
import navData from './data/navLists'
import randomWords from './data/randomWords'


function App() {

  const [open, setOpen] = React.useState(true);
  const [screen, setScreen] = React.useState("");

  let newWord = randomWords[Math.floor(Math.random() * randomWords.length)];

  const [wordleState, setWordleState] = React.useState({
    currWord: newWord, // Make uppercase for consistency
    wordleGame: [
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
    ],
    currentCol: 0,
    currentRow: 0,
    history: [],
    nonValidKeys: []
  });


  function readClicked(param) {
    
    setScreen(param);
    console.log("screen clicked: " + param);
  }

  function getScreenComponent(screen) {
    switch (screen) {
      case "Wordle":
        return <Wordle 
                  navState={open} 
                  setNavState={() => setOpen(!open)}
                  wordleState={wordleState}
                  setWordleState={setWordleState}
                  changeScreen = {setScreen}
                  screen={screen}
                />;
      case "Photography":
        return //<Photography />;
      default:
        return <Home 
                  navState={open} 
                  setNavState={() => setOpen(!open)} 
                  changeScreen = {setScreen}
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





      <div id="siteNav" className={open ? "open-nav" : "closed-nav"}>
        
        <div id="myName">
          <img src={logo} id="myNameIcon" alt="logo" />
          <span id="myNameText">Evan Williams</span>
        </div>
        
  
        
        <div class="home-bar" onClick={() => {setScreen(""); readClicked("Home"); setOpen(true)}}>
              
          <img src={homeIcon} class="hb-item" id="home_icon" alt="..." />
          <p class="hb-item" >Home</p>
              
        </div>
          
        <div id="nav-box" onClick={() => setOpen(!open)} className={open ? "open-navBox" : "closed-navBox"}>
          
          <img src={navIcon} class={open ? "open-navIcon" : "closed-navIcon"} id="nav-icon" alt="..." />
  
        </div>
        
  
        {navLists}

        
        <div className="nav-list">

          <p class="nav-list-title">Links</p>
          

          <a
            href="https://www.linkedin.com/in/evanlewiswilliamsdev/"
            className="home-bar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} className="hb-item" id="home_icon" alt="..." />
            <p className="nav-list-item">Linkedin</p>
          </a>

          <a
            href="https://github.com/EWilliams2002"
            className="home-bar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} className="hb-item" id="home_icon" alt="..." />
            <p className="nav-list-item">GitHub</p>
          </a>
          
          
        </div>

        
              
      </div>

      



      

      



      {getScreenComponent(screen)}

      



        



      
      
    
    </>
  )
}

export default App
