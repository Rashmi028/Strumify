   import React from 'react'
   import Sidebar from "./Sidebar"
   import Header from '../Home/Header'
   import { BrowserRouter, Routes, Route } from 'react-router-dom';
   import Footer from '../Home/Footer'
   import {Link} from 'react-router-dom'
   import Products from './Products'
   import './listing.css'
   export default function Listing(){
      return(
         
            <section className='ListingPage'>
            <div className='container'>
               <div className='content'>
               <ul className='list-inline'>
                  <li className='list-item'>
                     <Link to={'/'}>Home </Link> 
                  </li>
                  <li>{">"}</li>
                  <li className='list-item'>
                  <Link to={'/'}>Top-Categories</Link>
                  </li>
               </ul>
               <h1>Top-Categories </h1> 
               </div> 
               <div className='ListingData'>
                  <div className='row'>
                  
                     <Sidebar/>
                  
                     <div className='col-md-9 rightContent'>
                        <div className='Sort'>
                        <div className='sortby'><h3>Sort by:</h3></div>
                        <div className="dropdown">
                           <button className="dropbtn">Recommeded<i class="arrow down"></i></button>
                           <div className="dropdown-content">
                              <a href="#">Price: High To Low</a>
                              <a href="#">Price: Low To High</a>
                              <a href="#">What's New</a>  
                              <a href="#">Highest Rated</a> 
                              <a href="#">Highest Dicounts</a>
                           </div>
                     </div>
                     <div className='results-shown'>
                     Showing 1–12 of 33 results
                     </div>
                     </div>
                     <div className='row2'>
                     <Products/>
                     <Products/>
                     <Products/>
                     <Products/>
                     <Products/>
                     <Products/>
                     <Products/>
                     <Products/>
                     <Products/>
                     </div>
                     <hr/>
                     <div className='next-prev'>
                        <button className='button-nav'>1</button>
                        <button className='button-nav'>2</button>
                        <button className='button-nav'>3</button>
                        <button className='button-next'>{'>'}</button>
                        <button className='button-last'>{'>>'}</button>
                     </div>
                     </div>
                  </div>
               
               </div>
            </div>
         </section>
         
      )
   }