import React from 'react'
import { useSelector } from 'react-redux';
import ProductComponent from './ProductComponent'

function ProductListing() {
   // we need fetch our productwhich are availble in redux store
   // thats why we use slector
   const products=useSelector((state)=>state)
 console.log(products);
    return (
    <div className='ui grid container'>  
      <ProductComponent/> 
    </div>
  )
}

export default ProductListing