import { green } from '@mui/material/colors'
import './description.css'

export default function Description(){
    return(
        <section className='description'>
        <div className='Product-name'>
        Yamaha F280 40 Inch Acoustic Guitar With Strap, Polishing Cloth, Picks & E-book
        </div>
        <div className='Ratings'>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star"></i>
        <div className='rating-des'>
         2261 rating | 80 reviews
        </div>
        </div>
        <div className='Price'>
            <h2>Rs. 7,600</h2>
            <h4><s>Rs. 7,990</s></h4>
            <h3>80% off</h3>
        </div>
        <div className='color-cat'>
            <div>
            <h4>Color </h4>
            </div>
            <div className='color-pallete'>
            <ul className='colors'>
            <li style={{ backgroundColor:"red"}}>.</li>
            <li style={{backgroundColor:"blue"}}>.</li>
            <li style={{backgroundColor:"pink"}}>.</li>
            <li style={{backgroundColor:"maroon"}}>.</li>
            <li style={{backgroundColor:"yellow"}}>.</li>

            </ul>
            </div>
        </div>
        <div className='shopping-cart'>
            <div className='addmore'>
                
            <h4> 1</h4>
            <div className='up-down'>
            <i class="bi bi-caret-up-square-fill"></i>
            <i class="bi bi-caret-down-square-fill"></i>
            </div>
            
            </div>
            <h3><i class="bi bi-cart3"></i>Add to Cart</h3>
            <h3><i class="bi bi-heart-fill"></i>Wishlist</h3>
            
        </div>
        <div className='shipping-info'>
                <div className='shipping-row'>
                    <i className="bi bi-truck"></i> Ships in 24 Hours
                    <div className='pincode'>
                        <input type='text' placeholder='Enter Pincode' />
                        <button>Go</button>
                    </div>
                </div>
                <div className='deals'>
                    <h4>DEALS & OFFERS</h4>
                    <div className='deal-item'>
                        <i className="bi bi-cash"></i> 4% Cashback <i className="bi bi-info-circle"></i>
                    </div>
                    <div className='deal-item'>
                        <i className="bi bi-credit-card"></i> EMI Start At Rs.263 <i className="bi bi-info-circle"></i>
                    </div>
                </div>
                <div className='returns'>
                    <h4>RETURNS & WARRANTY</h4>
                    <div className='return-item'>
                        <i className="bi bi-arrow-repeat"></i> 15 Day Return <i className="bi bi-info-circle"></i>
                    </div>
                    <div className='return-item'>
                        <i className="bi bi-shield"></i> 2 Year Standard Warranty <i className="bi bi-info-circle"></i>
                    </div>
                  
                </div>
                </div>
        </section>
    )
}