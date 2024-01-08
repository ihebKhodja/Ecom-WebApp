import './App.scss'
import AuthContextContextProvider from './Contexts/AuthContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductsContextProvider } from './Contexts/ProductsContext';
import { CartItemsContextProvider } from './Contexts/CartItemsContext';
import Navbar from './Components/Navbar'
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import Register from './Pages/Register'
import { Home } from './Pages/Home';
import { ProductDetails } from './Pages/ProductDetails';
import { Order } from './Pages/Order';

function App() {

  return (
    <div className='app'>
      <AuthContextContextProvider>  
      <ProductsContextProvider >
      <CartItemsContextProvider>

        <BrowserRouter >
          <Navbar />
          <Routes>

            <Route exact path='/' element={<Home />} />
            <Route path='/signup' element={<Register />} />
            <Route path='/login' element={<Login/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/product/:id' element={<ProductDetails/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/order' element={<Order/>} />

          </Routes>
        </BrowserRouter>

      </CartItemsContextProvider>
      </ProductsContextProvider>
      </AuthContextContextProvider>
    </div>
  )
}

export default App;
