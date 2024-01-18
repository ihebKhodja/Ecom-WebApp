import { Link } from "react-router-dom"
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { PiBagSimpleBold } from "react-icons/pi";
import '../styles/_Navbar.scss'




function Navbar() {
  
 

  return (

    <nav className="navbar">
      <div className="navbar-start"> 
        {/* <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div> */}
        <Link id="navbar-icon" to={'/'}>
          <div className="store-icon">
            Mitoro</div>
        </Link>


        {/* <div className="submenu-container"> 
            <Link to={'/women'}>Women</Link>
            <div className="submenu-content"> 
              <Link to={'/woman/dresses'} >Dresses</Link>
              <Link to={'/woman/shoes'} >Shoes</Link>
              <Link to={'/woman/accessories'} >Accessories</Link>
            </div>

        </div>


        <div className="submenu-container"> 
          <Link to={'/men'}>Men</Link>
          <div className="submenu-content"> 
            <Link to={'/men/clothings'}>Clothings</Link>
            <Link to={'/men/shoes'}>Shoes</Link>
            <Link to={'/men/accessories'}>Accessories</Link>

          </div>
        </div> */}


      </div>

      

      <div className="navbar-end">
        <Link to={'/login'}>
          <FaRegUser />
        </Link>
        {/* <Link to={'/signup'}>
          <RiLoginBoxLine />
        </Link> */}
        <Link to={'/cart'}>
            <div className="cart-icon"><PiBagSimpleBold className="icon"/></div>

        </Link>
      </div>
        
    </nav>
  )
}
export default Navbar
