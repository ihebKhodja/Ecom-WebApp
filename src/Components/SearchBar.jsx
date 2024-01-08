import React from 'react'
import { useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";


const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search submitted:', searchTerm);
  };
  return (
    <div>
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
    </div>
  )
}

export default SearchBar