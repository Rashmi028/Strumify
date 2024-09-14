import './blog.css';
import 'react-slideshow-image/dist/styles.css'
import { Fade, Zoom , Slide } from 'react-slideshow-image'
export default function Blog(){

    return(
        <>
        <div className='Blog-Area'>
            <div className='Heading'><h1>Latest Blogs</h1></div>
           
            <div className='Blog-Full'>
            <div className='Blog-body'>
                <img src='/blog1.jpg'/>
                <div className='blog-date'>Jun 17, 2024</div>
                <div className='blog-title'><h2>Community Orchestras in the United States | National Endowment for the Arts</h2></div>
                <div className='blog-content'>Composer’s World Community music-making has long been a part of the arts-and-culture fabric in the United States. From the very</div>
                <div className='Read-more'><a href="#">Read More</a></div>
            </div>
            <div className='Blog-body'>
                <img src='/blog2.jpg'/>
                <div className='blog-date'>May 07, 2024</div>
                <div className='blog-title'><h2>Shreya Ghoshal: The Melodious Journey of a Singing Sensation </h2></div>
                <div className='blog-content'>In the vibrant world of Indian playback singing, one name stands out for its enchanting melodies and captivating voice – Shreya Ghoshal.</div>
                <div className='Read-more'><a href="#">Read More</a></div>
            </div>
            <div className='Blog-body'>
                <img src='/blog3.jpg'/>
                <div className='blog-date'>Jan 24, 2024</div>
                <div className='blog-title'><h2>How to Grow From a "Just a Pianist" to a Well-Rounded Musician </h2></div>
                <div className='blog-content'>Okay, first off, I know many of you are saying to yourself – a pianist is a musician. While that is technically correct, </div>
                <div className='Read-more'><a href="#">Read More</a></div>
            </div>
            <div className='Blog-body'>
                <img src='/blog4.webp'/>
                <div className='blog-date'>Mar 30, 2024</div>
                <div className='blog-title'><h2>BTS Celebrates 7th Anniversary With Succesful Bang Bang Con Online Concert</h2></div>
                <div className='blog-content'>In June 2013, the seven members of BTS started down the path that would lead them to becoming one of the most</div>
                <div className='Read-more'><a href="#">Read More</a></div>
            </div>
           
            </div>
            
        </div>
        </>
    );
}