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
            <div className='Scroll'>
          <div className='scroll-img'>
            <button className='scroll-button' onClick={scrollUp}><i class="bi bi-caret-up-fill"></i></button>
            <div className='row3' ref={row3Ref}>
                <div className='pic'><img src='/p1.jpg' alt='pic1'/></div>
                <div className='pic'><img src='/p2.webp' alt='pic2'/></div>
                <div className='pic'><img src='/p3.webp' alt='pic3'/></div>
                <div className='pic'><img src='/p4.webp' alt='pic4'/></div>
            </div>
            <button className='scroll-button' onClick={scrollDown}><i class="bi bi-caret-down-fill"></i></button>
            </div>
            </div>
            <div className='bigpic'>
                <img src='/p5.webp' alt='bigpic'/>
            </div>
        </div>
    );
}
