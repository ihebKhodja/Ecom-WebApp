import { Link } from "react-router-dom"
import {BiSolidStoreAlt} from 'react-icons/bi'
import {PiShoppingCartSimpleBold} from 'react-icons/pi'
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { PiHandbagSimpleThin } from "react-icons/pi";
import { IoSearchSharp } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import { PiBagSimpleBold } from "react-icons/pi";

function Navbar() {

   const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search submitted:', searchTerm);
  };
  return (

    <nav className="navbar">
      <div className="navbar-start"> 
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Link id="navbar-icon" to={'/'}>
          <div className="store-icon">
            Mitoro</div>
        </Link>

        <div className="submenu-container"> 
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
        </div>


      </div>

      <div className="searchbar">
         <form onSubmit={handleSearchSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search for items and brands"
          value={searchTerm}
          onChange={handleSearchChange}/>
        <button type="submit"><IoSearchSharp className="icon"/></button>
      </form>

      </div>
      <div className="navbar-end">
        <Link to={'/login'}>
          <FaRegUser />
        </Link>
        <Link to={'/cart'}>
          <div className="cart-icon"><PiBagSimpleBold className="icon"/>  </div>
        </Link>
      </div>
        
    </nav>
  )
}
export default Navbar
