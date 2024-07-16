import './topcategory.css'
import acousticGuitarImage from '../assets/acoustic-guitar.jpg';
import electricGuitarImage from '../assets/electric-guitar.jpg';
import bass from '../assets/bass-guitar.jpg';
import audio from '../assets/audio-interfaces.jpg';
import dj from '../assets/DJ.jpg';
import drums from '../assets/drums.jpg';
import keyboard from '../assets/keyboard.jpg';
import speaker from '../assets/speakers.png';
import {Link} from 'react-router-dom'
const categories = [
  {
    name: 'ACOUSTIC GUITARS',
    image: acousticGuitarImage,
    
  },
  {
    name: 'ELECTRIC GUITARS',
    image:electricGuitarImage,
  },
  {
    name: 'DRUMS & PERCUSSION',
    image: drums,
  },
  {
    name: 'KEYBOARDS',
    image: keyboard,
  },
  {
    name: 'AUDIO INTERFACES',
    image: audio,
  },
  {
    name: 'DJ & KARAOKE',
    image: dj,
  },
  {
    name: 'BASS GUITARS',
    image: bass,
  },
  {
    name: 'SPEAKERS',
    image: speaker,
  },
];

const ShopByCategory = () => {
  return (
    <div className="shop-by-category">
      <h2>Top Categories</h2>
      <Link to={'/listing'}  style={{ textDecoration: 'none', color:'black'}}>
      <div className="category-grid">
      
        {categories.map((category) => (
          
          <div key={category.name} className="category-item">
            <img src={category.image} alt={category.name} />
            <p><a href="#">{category.name}</a></p>
          </div>
        ))}
       
      </div>
      </Link>
      <div className='All-category'>
        <a href="#"><h4>VIEW ALL CATEGORIES</h4></a>
      </div>
    </div>
  );
};

export default ShopByCategory;