
import './home.css'
import Header from "./Header";
import Footer from "./Footer";
import Blog from "./Blog";
import TopCategory from "./TopCategory";
import Bestseller from "./Bestseller";
import HotDeals from "./Hotdeals";
import {Link} from 'react-router-dom'
import 'react-slideshow-image/dist/styles.css'
import { Fade, Zoom , Slide } from 'react-slideshow-image'

export default function Home() {
  const slideImages = [
    '/Casio-logo.jpg',
    '/Fender.webp',
    '/gibson.webp',
    '/Ibanez-logo.jpg',
    '/kawai.jpg',
    '/korg.jpg',
    '/Steinway-&-Sons-logo-design.jpg',
    '/roland.jpg',
    '/takamine.webp',
    '/taylor.jpg',
    '/Yamaha.webp',
  ];
  return (
    <div className="App">
    
      <div className="navFacility">
        <ul>
          <li><img src="/shield.png"/>Free 2 Year warranty</li>
          <li><img src="/phone.png"/>Free Tech</li>
          <li><img src="/free-shipping.png"/>Free Shipping</li>
          <li><img src="/product-return.png"/>15 days Return</li>
        </ul>
      </div>
      <Slide>
      <div className="promotion-banner2">
        <h2>Summer Jam Sale!</h2>
        <p>Up to 60% off on guitars, drums, and more. Limited time offer!</p>
        <button className="shop-now-btn" role='button'><Link to={'/listing'}  style={{ textDecoration: 'none', color:'black'}}>Shop Now</Link></button>
      </div>
        <div className="promotion-banner">
        <h2>Big Sale!</h2>
        <p>Up to 50% off on selected items. Limited time offer!</p>
        <button className="shop-now-btn" role=""><Link to={'/listing'}  style={{ textDecoration: 'none', color:'black'}}>Shop Now</Link></button>
      </div>
     
      </Slide>
      <div className='Top-Cat'>
       <TopCategory/>
      </div>
      <Bestseller title="Best sellers"/>
      <HotDeals/>
      <div className="promotional-banners">
      <div className="banner">
        <img src='/banner2.jpg' />
        <div className="banner-text">
          <h2>NT1-A</h2>
          <p>Backing Keyboard<br />Our Best Deals Treat Yourself</p>
          <button><Link to={'/listing'}  style={{ textDecoration: 'none', color:'white'}}>Click Here to Buy</Link></button>
        </div>
      </div>
      <div className="banner">
        <img src='/banner3.jpg' />
        <div className="banner-text">
          <h1>Drums & Percussions</h1>
          <h3>SALE UP TO 40% OFF</h3>
          <button><Link to={'/listing'}  style={{ textDecoration: 'none', color:'white'}}>Click Here to Buy</Link></button>
          <h3>LIMITED QUANTITY</h3>
        </div>
      </div>
      <div className="banner">
        <img src='/banner4.jpg' />
        <div className="banner-text">
          <h1>Recording Solutions</h1>
          <h4>Plug-And-Play recording at home!</h4>
          <button><Link to={'/listing'}  style={{ textDecoration: 'none', color:'white'}}>Shop Now</Link></button>
     
        </div>
      </div>
    </div>
  
  <Blog/>
    <Slide>
    <div className='brand-logo-slider'>
     
    {slideImages.map((image, index) => (
          <div className='brand-logo' key={index}>
            <img src={image} alt={`Brand Logo ${index}`} />
          </div>
        ))}
    </div>
    </Slide>
    
    </div>
  );
}
