// import React from 'react'

// // Styles and Assets
// import './style/App.css'
// import Home from "./components/home"
// import homeIcon from './assets/home.svg'
// import navIcon from './assets/back.svg'
// import logo from './assets/LOGO TRAN.svg'

// // Components
// import NavList from './components/tinyComp/navList'
// import Wordle from './components/wordle'

// // Data
// import navData from './data/navLists'


// function App() {

//   const [open, setOpen] = React.useState(true);
//   const [screen, setScreen] = React.useState("");

  


//   function readClicked(param) {
//     if (screen === "Wordle" && param !== "Wordle") {
//         // Get a reference to the Wordle instance and call saveWordleState
//         // (You might need to use refs or move saveWordleState to a global utility for easy access)
//         // For demo: window.saveWordleState() if you assign the function globally inside Wordle
//         if (window.saveWordleState) window.saveWordleState();
//         console.log("Saved Wordle state before navigating away.");
//     }
//     setScreen(param);
//     console.log("screen clicked: " + param);
//   }

//   function getScreenComponent(screen) {
//     switch (screen) {
//       case "Wordle":
//         return <Wordle 
//                   navState={open} 
//                   setNavState={() => setOpen(!open)}
//                 />;
//       case "Photography":
//         return //<Photography />;
//       default:
//         return <Home 
//                   navState={open} 
//                   setNavState={() => setOpen(!open)} 
//                 />;
//     }
//   }

//   const navLists = navData.map((entry) => {
//     return (
//       <NavList
//         key={entry.id}
//         titleName = {entry.titleName}
//         items = {entry.items}
//         clicked = {readClicked}
//       />
//     )
//   })

//   return (
//     <>





//       <div id="siteNav" className={open ? "open-nav" : "closed-nav"}>
        
//         <div id="myName">
//           <img src={logo} id="myNameIcon" alt="logo" />
//           <span id="myNameText">Evan Williams</span>
//         </div>
        
  
        
//         <div id="home-bar" onClick={() => {setScreen(""); readClicked("Home"); setOpen(true)}}>
              
//           <img src={homeIcon} class="hb-item" id="home_icon" alt="..." />
//           <p class="hb-item" >Home</p>
              
//         </div>
          
//         <div id="nav-box" onClick={() => setOpen(!open)} className={open ? "open-navBox" : "closed-navBox"}>
          
//           <img src={navIcon} class={open ? "open-navIcon" : "closed-navIcon"} id="nav-icon" alt="..." />
  
//         </div>
        
  
//         {navLists}
              
//       </div>

      



      

      



//       {getScreenComponent(screen)}

//       <div id="icon-attr">

//           Icons by <a href="https://icons8.com/" style={{ textDecoration: "underline" }}>Icons8</a>

//       </div>



        



      
      
    
//     </>
//   )
// }

// export default App

import React from 'react'

// Styles and Assets
import './style/App.css'
import Home from "./components/home"
import homeIcon from './assets/home.svg'
import navIcon from './assets/back.svg'
import logo from './assets/LOGO TRAN.svg'

// Components
import NavList from './components/tinyComp/navList'
import Wordle from './components/wordle'

// Data
import navData from './data/navLists'


function App() {

  const [open, setOpen] = React.useState(true);
  const [screen, setScreen] = React.useState("");

  const [wordleState, setWordleState] = React.useState({
    currWord: "VALID", // Make uppercase for consistency
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
    history: []
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
                />;
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





      <div id="siteNav" className={open ? "open-nav" : "closed-nav"}>
        
        <div id="myName">
          <img src={logo} id="myNameIcon" alt="logo" />
          <span id="myNameText">Evan Williams</span>
        </div>
        
  
        
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
