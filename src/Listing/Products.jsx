import React from 'react';
import './products.css';

export default function Products() {
  return (
    <>
      <div className="col-sm-3">
        <div className="thumb-wrapper">
          <span className="wish-icon"><i class="fa-regular fa-heart"></i></span>
          <div className="img-box">
            <img src="../../public/banner2.jpg" className="img-responsive" alt=""/>
          </div>
          <div className="thumb-content">
            <h4>Apple iPad</h4>
            <div className="star-rating">
              <ul className="list-inline">
                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                <li className="list-inline-item"><i className="fa-regular fa-star"></i></li>
              </ul>
            </div>
            <div className="item-price"><p ><strike>$400.00</strike> <b>$369.00</b></p></div>
            
            <a href="#" className="btn btn-primary">Add to Cart</a>
          </div>
        </div>
      </div>
    </>
  );
}
