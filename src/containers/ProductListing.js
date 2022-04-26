import React,{useEffect} from 'react'

// import axios for an fetching api
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent'
import {setProducts} from '../redux/actions/productAction'
function ProductListing() {
   // we need fetch our productwhich are availble in redux store
   // thats why we use slector
  const products=useSelector((state)=>state.allProducts.products)
  const dispatch=useDispatch();
  // here im creating afunction fecthing all the products
  const fetchProducts = async () => {
    // fetching the api
    const response = await axios
    .get("https://fakestoreapi.com/products")
    .catch((err) => {
      console.log("Err: ", err);
    });
    // after fetching api we dispatch oue action which is setProduct
     dispatch(setProducts(response.data));
  }
  // use effect ko side effect k liye use krte like fetch api etc
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log("Products: ",products);


    return (
    <div className='ui grid container'>  
      <ProductComponent/> 
    </div>
  )
}

export default ProductListing