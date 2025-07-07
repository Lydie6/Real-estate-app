import React ,{useState} from 'react'
import "./Header.css"
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from "react-outside-click-handler"; // ✅ sans les { }


import logo from "../../assets/logo.png"
const Header = () => {
 const [menuOpen, setMenuOpen] = useState(false);
 const getMenuStyle = (menuOpen) => {
   if(document.documentElement.clientWidth < 768){
     return {right:!menuOpen  &&  "-100%"}
   } 
   
 }
  return (
   
  <section className="h-wrapper">
 
 <div className="h-container flexCenter innerWidth paddings">
  <img src={logo} alt="logo" width={100} />
  <OutsideClickHandler 
  onOutsideClick={() => setMenuOpen(false)}>
  <div className="h-menu flexCenter" style={getMenuStyle(menuOpen)}>
    <a href=""> Residencies</a>
     <a href="">Our Value</a>
    <a href="">Contact Us</a>
    <a href="">Get Started</a>
    <button className="button"><a href="">Contact</a></button>
  </div>
  </OutsideClickHandler>

  <div className="menu-icon" onClick={() => setMenuOpen((prev)=>(!prev))}>
<BiMenuAltRight size={30} />
</div>
</div>

  </section>
  )
}

export default Header
