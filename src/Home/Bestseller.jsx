
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './BestSellers.css';
import img1 from '../assets/bestseller1.png';
import img2 from '../assets/bestseller2.png';
import img3 from '../assets/bestseller3.png';
import img4 from '../assets/bestseller4.png';
import img5 from '../assets/bestseller5.png';

const bestSellers = [
  {
    id: 1,
    name: 'Fender Squier Sonic Stratocaster Electric Guitar',
    price: 'Rs. 16,900',
    originalPrice: 'Rs. 18,495',
    imgSrc: img1,
  },
  {
    id: 2,
    name: 'Akai MPK MINI MK3 Compact Midi Keyboard and Pad MIDI Controller',
    price: 'Rs. 8,599',
    originalPrice: 'Rs. 11,600',
    imgSrc: img2,
  },
  {
    id: 3,
    name: 'Alesis Nitro Max Kit Eight Piece Electronic Drum Kit with Mesh Heads and Bluetooth',
    price: 'Rs. 38,199',
    originalPrice: 'Rs. 46,500',
    imgSrc: img3,
  },
  {
    id: 4,
    name: 'Focusrite Scarlett Solo Studio Audio Interface Pack',
    price: 'Rs. 27,349',
    originalPrice: 'Rs. 29,599',
    imgSrc: img4,
  },
  {
    id: 5,
    name: 'Fender Mustang LT25 25 Watts Guitar Combo Amplifier',
    price: 'Rs. 19,152',
    originalPrice: 'Rs. 23,064',
    imgSrc: img5,
  },
];

const BestSellers = () => {
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
  
    return (
      <div className="best-sellers">
        <h1>Best Sellers</h1>
        <Slider {...settings}>
          {bestSellers.map(item => (
            <div key={item.id} className="best-seller-item">
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
  
  export default BestSellers;