import React, { useState } from 'react';
import './sidebar.css';
import { Slider } from '@mui/material';

const Sidebar = () => {
  const [priceRange, setPriceRange] = useState([500, 3000]);

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  // Define the marks for the slider
  const marks = [
    { value: 500, label: '$500' },
    { value: 1000, label: '1000' },
    { value: 1500, label: '1500' },
    { value: 2000, label: '2000' },
    { value: 2500, label: '2500' },
    { value: 3000, label: '3000' },
  ];

  return (
    <>
      <div className='sidebar'>
        <div className='Categories'>
          <h2>Categories</h2>
          <div className='category-menu'>
            <input id="checkbox" type="checkbox" /><label>Acoustic Guitar</label>
          </div>
          <div className='category-menu'>
            <input id="checkbox" type="checkbox" /><label>Electric Guitar</label>
          </div>
          <div className='category-menu'>
            <input id="checkbox" type="checkbox" /><label>Bass Guitar</label>
          </div>
          <div className='category-menu'>
            <input id="checkbox" type="checkbox" /><label>Classical Guitar</label>
          </div>
          <div className='category-menu'>
            <input id="checkbox" type="checkbox" /><label>Keyboard</label>
          </div>
          <div className='more'>
            +100 more
          </div>
        </div>
        <hr/>
        <div className='Brand'>
          <h2>Brand</h2>
          <div className='category-menu'>
            <input id="checkbox" type="checkbox" /><label>Taylor</label>
          </div>
          <div className='category-menu'>
            <input id="checkbox" type="checkbox" /><label>Fender</label>
          </div>
          <div className='category-menu'>
            <input id="checkbox" type="checkbox" /><label>Kawai</label>
          </div>
          <div className='category-menu'>
            <input id="checkbox" type="checkbox" /><label>Yamaha</label>
          </div>
          <div className='more'>
            +100 more
          </div>
        </div>
        <hr/>
        <div className='Prices'>
          <h2>Price</h2>
          <div className='Slider' style={{ width: 200 }}>
            <Slider
              aria-label="Price range"
              value={priceRange}
              onChange={handlePriceChange}
              // valueLabelDisplay="on"
              min={500}
              max={3000}
              step={500}
              marks={marks}  // Add the marks here
              sx={{
                color: 'error.main',
                '& .MuiSlider-thumb': {
                  backgroundColor: 'error.main',
                },
                '& .MuiSlider-track': {
                  backgroundColor: 'error.main',
                },
              }}
            />
          </div>
          <p>Price Range: ${priceRange[0]} - ${priceRange[1]}</p>
        </div>
        <div className='Color'>
          <h2>Color</h2>
          <div className='category-menu'>
            <input id="checkbox" type="checkbox" /><label>Red</label>
          </div>
          <div className='category-menu'>
            <input id="checkbox" type="checkbox" /><label>Purple</label>
          </div>
          <div className='category-menu'>
            <input id="checkbox" type="checkbox" /><label>Pink</label>
          </div>
          <div className='category-menu'>
            <input id="checkbox" type="checkbox" /><label>Green</label>
          </div>
          <div className='more'>
            +100 more
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
