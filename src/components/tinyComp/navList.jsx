import NavTitle from "./navTitle"
import NavItem from "./navItem"


export default function navList(props) {

    const navItems = props.items.map( item => {
        return (
            <NavItem 
                word={item} 
                clicked={() => props.clicked(item)}
            />
        )
    })

    
    return (
        <div class="nav-list">
          <NavTitle titleName={props.titleName}/>
          {navItems}
      </div>
    )
}