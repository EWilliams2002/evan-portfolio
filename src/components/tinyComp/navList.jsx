import NavTitle from "./navTitle"
import NavItem from "./navItem"



// At the top of your component file:
const images = import.meta.glob('../../assets/*.png', { eager: true });

export default function navList(props) {
  const navItems = Object.entries(props.items).map(([key, value]) => {
    const imgSrc = images[`../../assets/${value}.png`]?.default;
    return (
      <div id='home-bar' key={key} onClick={() => props.clicked(key)}>
        <img src={imgSrc} className="hb-item" id="home_icon" alt="..." />
        <NavItem word={key} />
      </div>
    );
  });

  return (
    <div className="nav-list">
      <NavTitle titleName={props.titleName}/>
      {navItems}
    </div>
  );
}