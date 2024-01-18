import React, { useEffect, useState } from 'react'
import FilterList from './FilterList'
import '../styles/_SiderBar.scss'

export const SideBar = ({productsList}) => {
    const [filteredProducts, setFilteredProducts] = useState([]);
  const [reload, setReload]=useState(true) // filteredProducts is empty after reload
  const handleAllClick = () => {
    setFilteredProducts(productsList);
    setReload(false)

  };
  
  const handleCategoryOneClick = () => {
    const categoryOne = productsList.filter(item => item.categories_id === 1);
    setFilteredProducts(categoryOne);
    setReload(false)

  };
  
  const handleCategoryTwoClick = () => {
    const categoryTwo = productsList.filter(item => item.categories_id === 2);
    setFilteredProducts(categoryTwo);
    setReload(false)

  };
 
  return (
    <div className='sidebar-container'>

    <div className='sidebar'>
        <button onClick={handleAllClick}>All</button>
        <button onClick={handleCategoryOneClick}>Vests</button>
        <button onClick={handleCategoryTwoClick}>Shirts</button>
    </div>
{ reload ? 
        <FilterList productsList={ productsList }/>
:
        <FilterList productsList={ filteredProducts }/>
}

    </div>
  )
}
