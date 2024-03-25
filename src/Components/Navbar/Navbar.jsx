import { IoCartOutline } from "react-icons/io5";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";



const Navbar = () => {
    const [responsiveClass, SetresponsiveClass] = useState("mobileMenu")
    const menuButton = ()=>{
        SetresponsiveClass("mobileMenuShow")
    }
    const cancelMenuButton = ()=>{
        SetresponsiveClass("mobileMenu")
    }
  return (
    <div>
        <div className="navBar">
    <button onClick={menuButton} className="menuButton"><HiOutlineMenuAlt2/></button>
      <h1 className="navTitle logoFont">Taste now</h1>
      <div className="navLinks">
        <a className="activeLink" href="#">Home</a>
        <a href="#">About us</a>
        <a href="#">Blog</a>
        <a href="#">Contact us</a>
      </div>
      <div className="buttonSection">
        <button className="cartButton"><IoCartOutline/></button>
        <button className="signUpButton">Sign up</button>
      </div>
    </div>
      <div className={responsiveClass}>
        <button onClick={cancelMenuButton} className="crossButton"><RxCross2/></button>
      <h1 className="Menutitle logoFont">Taste now</h1>
        <a className="activeLink" href="#">Home</a>
        <a href="#">About us</a>
        <a href="#">Blog</a>
        <a href="#">Contact us</a>
        <button className="button">Sign up</button>
      </div>
    </div>
  )
}

export default Navbar
