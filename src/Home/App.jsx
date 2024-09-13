import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Listing from '../Listing/Listing';
import Product from "../Product/Product";
export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
         <Route  path='/' element={<Home/>}/>
         <Route  path='/listing' element={<Listing/>}/>
         <Route path="/product/:id" element={<Product />} />

          
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
