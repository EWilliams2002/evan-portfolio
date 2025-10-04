import React from "react";
import homeIcon from '../assets/home.svg'
import menuIcon from '../assets/menu.svg'
import NavList from '../components/tinyComp/navList'


export default function nav(props) {

  // turn home bar and navlists into components
  
  // const [open, setOpen] = React.useState(true);



  return (
    <div id="nav" className={props.navState ? "open-nav" : "closed-nav"}>
        
        
      <p>Evan Williams</p>


      <div id="home-bar">
            
        <img src={homeIcon} class="hb-item" id="home_icon" alt="..." />
        <p class="hb-item" >Home</p>
            
      </div>
        
      <div id="nav-box" className={props.navState ? "open-navBox" : "closed-navBox"}>
        
        <img src={menuIcon} onClick={props.setNavState} class="nb-item" id="menu-icon" alt="..." />

      </div>
      

      <NavList 
        titleName = "Me"
        items = {["Photography", "Writing", "3D Models"]}
      />

      <NavList 
        titleName = "Projects"
        items = {["Wordle", "CSP Solver", "Kanji Review App"]}
      />

      <NavList 
        titleName = "Links"
        items = {["Linkedin", "Github"]}
      />
        
    </div>
  )
}