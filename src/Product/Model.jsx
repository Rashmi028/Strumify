import React, { useRef } from 'react';
import './model.css';

export default function Model() {
    const row3Ref = useRef(null);

    const scrollUp = () => {
        if (row3Ref.current) {
            row3Ref.current.scrollBy({ top: -120, behavior: 'smooth' });
        }
    };

    const scrollDown = () => {
        if (row3Ref.current) {
            row3Ref.current.scrollBy({ top: 120, behavior: 'smooth' });
        }
    };

    return (
        <div className='Model-structure'>
          <div className='scroll-img'>
            <button className='scroll-button' onClick={scrollUp}>⬆</button>
            <div className='row3' ref={row3Ref}>
                <div className='pic'><img src='../../public/banner2.jpg' alt='pic1'/></div>
                <div className='pic'><img src='../../public/banner2.jpg' alt='pic2'/></div>
                <div className='pic'><img src='../../public/banner2.jpg' alt='pic3'/></div>
                <div className='pic'><img src='../../public/banner2.jpg' alt='pic4'/></div>
            </div>
            <button className='scroll-button' onClick={scrollDown}>⬇</button>
            </div>
            <div className='bigpic'>
                <img src='../../public/banner2.jpg' alt='bigpic'/>
            </div>
        </div>
    );
}
