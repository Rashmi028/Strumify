import React from 'react';
import './sidebar.css';
import { Slider } from '@mui/material';

const Sidebar = () => {
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
            <input id="checkbox" type="checkbox" /><label>ClassicalGuitar</label>
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
        <div className='Price'>
          <h2>Price</h2>
          <div className='Slider' style={{ width: 200 }}>
            <Slider
              aria-label="Price range"
              value={[0, 30]}
              onChange={(e, newValue) => console.log(newValue)}
              valueLabelDisplay="off"
              min={0}
              max={100}
              sx={{
                color: 'error.main', // Change the color of the slider
                '&.MuiSlider-thumb': {
                  backgroundColor: 'error.main', // Change the color of the thumb
                },
                '&.MuiSlider-track': {
                  backgroundColor: 'error.main', // Change the color of the track
                },
              }}
            />
          </div>
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