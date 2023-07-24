import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import CheckOut from "./pages/CheckOut"
import ProductList from "./pages/ProductList";
import React, { useState } from "react";
import { CartProvider } from "./components/contexts/CartContext";
import store from "./store/store";

function App() {
  const [selectedProducts, setSelectedProducts] = useState([]);

  return (
    <>
    
    <CartProvider store={store} >
    <BrowserRouter>
    <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products"element={<ProductList/>} />
          <Route path="/checkout" element={<CheckOut selectedProducts={selectedProducts} />} /> 
      </Routes>
    </BrowserRouter>
    </CartProvider>
    
    </>
  )
}

export default App
