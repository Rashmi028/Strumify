import './product.css'
import {Link} from 'react-router-dom'
import Model from './Model'
import Description from './Description'
import ProductDetails from './ProductDetails'
export default function Product(){
    return(
       <section className='Product-Info'>
            <div className='content'>
               <ul className='list-inline'>
                  <li className='list-item'>
                     <Link to={'/'}>Home </Link> 
                  </li>
                  <li>{">"}</li>
                  <li className='list-item'>
                  <Link to={'/'}>Acoustic Guitar</Link>
                  </li>
                  <li>{">"}</li>
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
        </section>
    )
}