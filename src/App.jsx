import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Collection from './pages/Collection';
import About from './pages/About';
import Product from './pages/Product';
import Cart from './pages/Cart';
import PlaceOrder from './pages/PlaceOrder';
import Orders from "./pages/Orders"
import Login from "./pages/Login"
import Navbar from './component/Navbar';
import Contact from './pages/Contact';
import Footer from './component/Footer';
import SearchBar from './component/SearchBar';
import { ToastContainer, toast } from 'react-toastify';
function App() {
  return (
    <>
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <ToastContainer />
        <Navbar />
        <SearchBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/about' element={<About />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/place-order' element={<PlaceOrder />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/login' element={<Login />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App