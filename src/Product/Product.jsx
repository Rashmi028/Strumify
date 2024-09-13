import './product.css'
import {Link} from 'react-router-dom'
import Model from './Model'
import Description from './Description'
import ProductDetails from './ProductDetails'
import Similarproduct from './Similarproducts'
import HotDeals from '../Home/Hotdeals'
export default function Product(){
    return(
       <section className='Product-Info'>
            <div className='content'>
               <ul className='list-inline'>
                  <li className='list-item'>
                     <Link to={'/'}>Home </Link> 
                  </li>
                  <li><i class="fa-solid fa-angle-right"></i></li>
                  <li className='list-item'>
                  <Link to={'/'}>Acoustic Guitar</Link>
                  </li>
                  <li><i class="fa-solid fa-angle-right"></i></li>
                  <li className='list-item'>
                  <Link to={'/'}>Yamaha C40</Link>
                  </li>
               </ul>
            </div> 
            <div className='Product-details'>
            <Model/>
            <Description/>
           
            </div>
            <ProductDetails/>

            <Similarproduct/>

            <HotDeals/>
        </section>
    )
}