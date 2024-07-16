import React from 'react';
import { Range, getTrackBackground } from 'react-range';
import './priceslider.css';

const PriceSlider = ({ values, setValues }) => {
  const STEP = 1;
  const MIN = 0;
  const MAX = 1000;

  return (
    <div className="price-slider">
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '6px',
              width: '100%',
              background: getTrackBackground({
                values,
                colors: ['#ccc', '#548BF4', '#ccc'],
                min: MIN,
                max: MAX,
              }),
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '24px',
              width: '24px',
              borderRadius: '12px',
              backgroundColor: '#FFF',
              border: '2px solid #548BF4',
              boxShadow: '0px 2px 6px #AAA',
            }}
          />
        )}
      />
      <output className="price-output">${values[0]} - ${values[1]}</output>
    </div>
  );
};

export default PriceSlider;
