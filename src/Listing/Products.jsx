import React from 'react';
import { useNavigate } from 'react-router-dom';
import './products.css';
import Product from '../Product/Product';

export default function Products({ product }) {
  const navigate = useNavigate();

  // Function to handle click event
  const handleProductClick = () => {
    navigate(`/product/${product.id}`); // Assuming you're passing the product ID in the URL
  };

  return (
    <div className="col-sm-3" onClick={handleProductClick}>
      <div className="thumb-wrapper">
        <span className="wish-icon"><i className="fa-regular fa-heart"></i></span>
        <div className="img-box">
          <img src={product.image1} className="img-responsive" alt={product.name} />
        </div>
        <div className="thumb-content">
          <h4>{product.name}</h4>
          <div className="star-rating">
            <ul className="list-inline">
              {[...Array(5)].map((_, i) => (
                <li className="list-inline-item" key={i}>
                  <i className={`fa ${i < product.Star ? 'fa-star' : 'fa-star-o'}`}></i>
                </li>
              ))}
            </ul>
          </div>
          <div className="item-price">
            <p>
              <strike>${product.actual_price}</strike> <b>${product.selling_price}</b>
            </p>
          </div>
          <a href="#" className="btn btn-primary">Add to Cart</a>
        </div>
      </div>
    </div>
  );
}
