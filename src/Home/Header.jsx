
import "./Header.css";
import {Link} from 'react-router-dom'
export default function Header() {
  return (
    <div className="Header">
      {/* <div className="head">Order Online Today</div> */}
      <div className="nav-bar">
        <ul>
          <li>
            <div className="applogo">
              <a href="#home"><Link to={'/'}  style={{ textDecoration: 'none'}}><img src="/Strumify-logo.png" alt="Strumify logo"/></Link></a>
            </div>
          </li>
          <li>
            <div className="searchbar">
            <input type="text" placeholder="Search Products" />
              <button type="button">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </li>
          <li className="dropdown">
            <button className="dropbutn"><i className="bi bi-person-fill"></i>Login</button>
            <div className="dropdown-content">
              <a href="#">New Customer? <span className="Signup" >SignUp</span></a>
              <a href="#"><i class="bi bi-person-circle"></i>My Profile</a>
              <a href="#"><i class="bi bi-box-seam"></i>My Orders</a>
              <a href="#"><i class="bi bi-gift"></i>Rewards</a>
              <a href="#"><i class="bi bi-wallet2"></i>Gift Cards</a>
            </div>
          </li>
          <li>
            <a href="#cart"><i className="bi bi-cart3"></i>Cart</a>
          </li>
          <li>
            <a href="#favourite"><i className="bi bi-heart-fill"></i>Favourites</a>
          </li>
          <li>
            <a href="#seller"><i className="bi bi-shop-window"></i>Become a Seller</a>
          </li>
          <li className="dropdown">
          <button className="dropbutn"><i className="bi bi-three-dots-vertical"></i></button>
            <div className="dropdown-content">
              <a href="#"><i class="bi bi-bell"></i>Notifications</a>
              <a href="#"><i class="bi bi-headset"></i>24x7 Customer Care</a>
              <a href="#"><i class="bi bi-file-earmark-font"></i>Terms & Conditions</a>
              <a href="#"><i class="bi bi-info-circle"></i>Strumify Information</a>
            </div>
          </li>
        </ul>
      </div>
      <div className="shopnav">
        <ul>
          <li className="dropdown2">
            <button className="dropbtn">Shop By Category</button>
            <div className="dropdown-content2">
            <div className="column" >
            <h3> Guitars</h3>
              <a href="#">Electric Guitars</a>
              <a href="#">Acoustic Guitars</a>
              <a href="#">Bass Guitars</a>
              <a href="#">Classical Guitars</a>
              <a href="#">Electro - Acoustic Guitars</a>
              <a href="#">Guitar Amplifiers</a>
              <a href="#">Bass Guitar Amplifiers</a>
              <a href="#">Guitar Processors</a>
              <a href="#">Guitar Pedals</a>
              <a href="#">Guitar Accessories</a>
              <h3> Ukuleles</h3>
              <a href="#">Soprano Ukuleles</a>
              <a href="#">Concert Ukuleles</a>
              <a href="#">Tenor Ukuleles</a>
              <a href="#">Baritone Ukuleles</a>
            
  </div>
  <div className="column">
  <h3> Keyboards & Pianos</h3>
              <a href="#">Keyboard for Beginners</a>
              <a href="#">Portable Keyboards</a>
              <a href="#">Arranger Keyboards</a>
              <a href="#">Keyboard Bundles</a>
              <a href="#">Midi Keyboards</a>
              <a href="#">Digital Pianos</a>
              <a href="#">Synthesizers</a>
              <a href="#">Keyboard Amplifiers</a>
              <a href="#">Keyboard Accessories</a>
              <h3> Software & Plugins</h3>
              <a href="#">Plugins: Virtual Instruments</a>
              <a href="#">Plugins: Virtual Processors</a>
              <a href="#">DJ Software</a>
             
  </div>
  <div className="column" >
  <h3> Drums & Percussion</h3>
              <a href="#">Acoustic Drumkits</a>
              <a href="#">Electronic Drumkits</a>
              <a href="#">Electronic Drum Pads</a>
              <a href="#">Cajons</a>
              <a href="#">Cymbals</a>
              <a href="#">Snares</a>
              <a href="#">Percussions</a>
              <a href="#">Drum Hardware</a>
              <a href="#">Drum Accessories</a>
              <h3> Wind Instruments</h3>
              <a href="#">Harmonicas</a>
              <a href="#">Saxophones</a>
              <a href="#">Trumpets</a>
              <a href="#">Flutes</a>
              <a href="#">Clarinets</a>
              <a href="#">Trombones</a>
  </div>
  <div className="column">
  <h3> DJ Gear</h3>
              <a href="#">Groove Production</a>
              <a href="#">DJ Controllers Interfaces</a>
              <a href="#">DJ Mixers</a>
              <a href="#">DJ Headphones</a>
              <a href="#">Turntables</a>
              <a href="#">DJ Accessories</a>
              <h3> Live Sound Equipment</h3>
              <a href="#">Portable PA Systems</a>
              <a href="#">PA Systems</a>
              <a href="#">Mixers</a>
              <a href="#">Active PA Speakers</a>
              <a href="#">Passive PA Speakers</a>
              <a href="#">Microphones</a>
              <a href="#">Power Amplifiers</a>
              <a href="#">Wireless Systems</a>
  </div>
  <div className="column">
              <h3> Traditional Instruments</h3>
              <a href="#">Ukuleles</a>
              <a href="#">Harmonium</a>
              <a href="#">Classical Tanpura</a>
              <a href="#">Electronic Tanpura</a>
              <a href="#">Sitar</a>
              <a href="#">Hawaian guitar</a>
              <a href="#">Violins</a>
              <a href="#">Mandolins</a>
              <a href="#">Banjos</a>
  </div>
            </div>
          </li>
          <li className="dropdown2">
            <button className="dropbtn">Shop By Brand</button>
            <div className="dropdown-content3">
            <div className="column2">
            <a href="#">Vault</a>
            <a href="#">Fender</a>
            <a href="#">PRS</a>
            <a href="#">Kala</a>
            <a href="#">Ibanez</a>
            </div>
            <div className="column2">
            <a href="#"> Alesis</a>
            <a href="#">ESI</a>
            <a href="#">Behringer</a>
            <a href="#">Yamaha</a>
            <a href="#">Focusrite</a>
            </div>
            <div className="column2">
            <a href="#">Taylor</a>
            <a href="#">Casio</a>
            <a href="#">Presonus</a>
            <a href="#">Cort</a>
            <a href="#">Parkwood</a>
            </div>
            <div className="column2">
            <a href="#">ESP</a>
            <a href="#">Tama</a>
            <a href="#">Roland</a>
            <a href="#">M-Audio</a>
            <a href="#">Furch</a>
            <h3><a href="#">View All Brands</a></h3>
            </div>
            </div>
          </li>
          <li className="dropdown">
            <button className="dropbtn">Hot Deals</button>
            <div className="dropdown-content">
              <a href="#">Lightning Deals</a>
              <a href="#">Open Box items</a>
              <a href="#">Premium Gear</a>
              <a href="#">Accessories Store</a>
            </div>
          </li>
          <li className="dropdown">
            <button className="dropbtn">Services</button>
            <div className="dropdown-content">
              <a href="#">EMI & Financing</a>
              <a href="#">Business Audio Solutions</a>
              <a href="#">Service Center</a>
            </div>
          </li>
          <li className="dropdown">
            <button className="dropbtn">Blog</button>
           
          </li>
          <li className="dropdown">
            <button className="dropbtn">Contact Us</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
