import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import './components/Common.css'
import Footer from "./components/Footer";
import useFetch from './components/useFetch.js'
import React, { useState } from 'react';
import { UserContext } from "./components/UserContext";

function App() {
  const {data: products, isPending} = useFetch('http://localhost:8000/products');
  const [cartQuantity, setCartQuantity] = useState(0);

  return (
    <UserContext.Provider value={{cartQuantity, setCartQuantity}}>
      <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/products" element={products && <Products products={products} />} >                
            </Route>
          </Routes>
        </BrowserRouter>
      <Footer />
    </UserContext.Provider>
  );
}

export default App;
