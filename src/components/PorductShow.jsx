import React, { useState } from 'react'
import Card from './Card'
import Navbar from './Navbar';
import productsList from './data';
import Cart from './cart';
import Search from './Search';

const PorductShow = () => {
  const [products,setProduct] = useState(productsList);
  const [carts,setcart] = useState([]);


  const delCart = (id) => {
    setcart(carts.filter(itemInCart => itemInCart.id !== id));
  }

  const addToCart = (id) => {
     const currentCart = products.find(product =>product.id === id);
     const newCart = {
      id:Date.now(),
      quantity : 1,
      product:currentCart
     }
     setcart([...carts,newCart]) 
  }

  const inc_decBtn = (event,ID) => {
      if(event.target.id == "increase"){
            setcart(carts.map(itemInCart => {
      if(itemInCart.product.id === ID){
        itemInCart.quantity += 1;
      }
      return itemInCart
    }))
      }else{
        setcart(carts.map(itemInCart => {
        if(itemInCart.product.id === ID && itemInCart.quantity > 1){
              itemInCart.quantity -= 1;
            }
            return itemInCart
    }))
      }

  }

  // console.log(products)
  return (
    <div className=''>
        <Navbar products={products} delCart={delCart} inc_decBtn={inc_decBtn} carts={carts}/>
        <div className="row mt-3">
         {products.map( product => (
          <div className="col-12 col-md-3" key={product.id}>
            <Card carts={carts} addToCart={addToCart} product={product}/>
          </div>
         ))}
        </div>
    </div>
  )
}

export default PorductShow