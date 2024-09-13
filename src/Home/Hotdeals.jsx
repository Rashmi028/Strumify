
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './hotdeals.css';
import acousticGuitarImage from '../assets/hot-deal1.png';
import ukelele from '../assets/hot-deal2.png';
import ukelele2 from '../assets/hot-deal3.png';
import cable from '../assets/hot-deal4.png';
import guitar2 from '../assets/hot-deal5.png';

const hotdeals = [
  {
    id: 1,
    name: 'Vault EA20 Guitar Kit',
    price: 'Rs. 4,899',
    originalPrice: 'Rs. 10,000',
    imgSrc: acousticGuitarImage,
  },
  {
    id: 2,
    name: 'Vault UK-003 Soprano Ukulele',
    price: 'Rs. 1,799',
    originalPrice: 'Rs. 3,600',
    imgSrc: ukelele,
  },
  {
    id: 3,
    name: 'Vault UK-100S Ukulele',
    price: 'Rs. 2,199',
    originalPrice: 'Rs. 4,500',
    imgSrc: ukelele2,
  },
  {
    id: 4,
    name: 'Bajaao Standard Instrument Cable',
    price: 'Rs. 349',
    originalPrice: 'Rs. 599',
    imgSrc: cable,
  },
  {
    id: 5,
    name: 'Fender Squier SA-105CE Guitar',
    price: 'Rs. 11,152',
    originalPrice: 'Rs. 15,064',
    imgSrc: guitar2,
  },
];

const HotDeals = () => {
  const navigate = useNavigate();
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    const handleItemClick = (id) => {
      navigate(`/product/${id}`); // Assuming the route has product details with product ID
    };
    return (
      <div className="best-sellers">
        <h1>Hot Deals</h1>
        <Slider {...settings}>
          {hotdeals.map(item => (
            <div key={item.id} className="best-seller-item"
            onClick={() => handleItemClick(item.id)}>
              <img src={item.imgSrc} alt={item.name} />
              <h3>{item.name}</h3>
              <p>
                <span className="price">{item.price}</span>
                <span className="original-price">{item.originalPrice}</span>
              </p>
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  
  export default HotDeals;