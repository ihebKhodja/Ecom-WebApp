import './App.scss'
import AuthContextContextProvider from './Contexts/AuthContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductsContextProvider } from './Contexts/ProductsContext';

import Navbar from './Components/Navbar'
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import Register from './Pages/Register'
import { Home } from './Pages/Home';
import { CategoryOne } from './Pages/CategoryOne';
import { CategoryTwo } from './Pages/CategoryTwo';
import { ProductDetails } from './Pages/ProductDetails';

function App() {

  return (
    <div className='app'>
      <AuthContextContextProvider>  
      <ProductsContextProvider >

        <BrowserRouter >
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/signup' element={<Register />} />
            <Route path='/login' element={<Login/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/men' element={<CategoryOne/>} />
            <Route path='/women' element={<CategoryTwo/>} />
            <Route path='/product/:id' element={<ProductDetails/>} />

          </Routes>
          
        </BrowserRouter>
      </ProductsContextProvider>
      </AuthContextContextProvider>
    </div>
  )
}

export default App;
