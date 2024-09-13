import React, { useState, useEffect } from 'react';
import Sidebar from "./Sidebar";
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import { Link } from 'react-router-dom';
import Products from './Products';

import './listing.css';

// Import your products.json file
import productsData from '../productss.json';

export default function Listing() {
  const [sortOption, setSortOption] = useState('recommended');
  const [sortedProducts, setSortedProducts] = useState(productsData);

  // Sorting logic based on selected sort option
  useEffect(() => {
    let sorted = [...productsData];

    switch (sortOption) {
      case 'Low To High':
        sorted.sort((a, b) => a.selling_price - b.selling_price); // Price: Low to High
        break;
      case 'High To Low':
        sorted.sort((a, b) => b.selling_price - a.selling_price); // Price: High to Low
        break;
      case 'Highest Rated':
        sorted.sort((a, b) => b.Star - a.Star); // Highest Rated
        break;
      default:
        sorted = productsData; // Default: recommended sorting
    }

    setSortedProducts(sorted);
  }, [sortOption]);

  return (
    <section className='ListingPage'>
      <div className='container'>
        <div className='content'>
          <ul className='list-inline'>
            <li className='list-item'>
              <Link to={'/'}>Home </Link>
            </li>
            <li><i className="fa-solid fa-angle-right"></i></li>
            <li className='list-item'>
              <Link to={'/'}>Top-Categories</Link>
            </li>
          </ul>
          <h1>Top-Categories </h1>
        </div>
        <div className='ListingData'>
          <div className='row'>
            <Sidebar />
            <div className='col-md-9 rightContent'>
              <div className='Sort'>
                <div className='sortby'><h3>Sort by:</h3></div>
                <div className="dropdown">
                  <button className="dropbtn"> {sortOption} <i className="arrow down"></i></button>
                  <div className="dropdown-content">
                    <a href="#" onClick={() => setSortOption('High To Low')}>Price: High To Low</a>
                    <a href="#" onClick={() => setSortOption('Low To High')}>Price: Low To High</a>
                    <a href="#" onClick={() => setSortOption('Highest Rated')}>Highest Rated</a>
                  </div>
                </div>
                <div className='results-shown'>
                  Showing 1–12 of {sortedProducts.length} results
                </div>
              </div>
              <div className='row2'>
                {sortedProducts.map(product => (
                  <Products key={product.id} product={product} />
                ))}
              </div>
              <hr />
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
  );
}
