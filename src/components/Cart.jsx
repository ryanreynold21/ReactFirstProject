import React from 'react'
import CartItem from './CartItem'

const Cart = ({carts,inc_decBtn,delCart}) => {
 const total = carts.reduce((pv,cv) => pv + cv.product.price*cv.quantity , 0);
 const floorTotal = total.toFixed(2)
  return (<>


<div className="offcanvas offcanvas-end" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasExampleLabel">
      Shop List :  {carts.length} 
    </h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    {carts.map( itemInCart => <CartItem delCart={delCart} inc_decBtn={inc_decBtn} itemInCart={itemInCart} key={itemInCart.id} />)}
  </div>
        <div className=" position-absolute fixed-bottom d-flex justify-content-between align-content-center m-3 bg-secondary text-white rounded rounded-3 p-1">
            <h5 className=''>Total </h5>
            <span> £ {floorTotal} </span>
        </div>
</div>
  </>
  )
}

export default Cart