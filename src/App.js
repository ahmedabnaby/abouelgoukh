import React from 'react';
import Homepage from "./components/Homepage"
import Footer from "./components/Footer"
import {products} from "./components/Product"
import Navbar from "./components/Navbar"
import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
      <Homepage products={products}/>
      <Footer/>
    </div>
  );
}

export default App;
