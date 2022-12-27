import React from 'react'

const CartItem = ({itemInCart,inc_decBtn,delCart}) => {
  const cost = itemInCart.product.price * itemInCart.quantity;
  console.log(itemInCart.product.category)
  const del = (id) => {
      if(confirm("Are you Sure to delete :(")){
        delCart(id)
      }
  }
  return (
    <div className=' border border-success p-2 mb-3 rounded d-flex position-relative'>
      <img src={itemInCart.product.image} height={"50px"} width={"50px"} alt="" />
      <div className=" w-50 d-flex flex-column ms-3 pb-0">
        <h6 className=''>£ {cost}</h6>
        <p className=' text-truncate mb-0'>{itemInCart.product.title}</p> 
      </div>
      <div className=" ms-0 d-flex flex-column">
        <div className=" text-end mb-2">
          <button onClick={del.bind(null,itemInCart.id)} className=' btn btn-sm btn-outline-danger'> 
            <i className=' bi bi-trash3'></i>
           </button>
        </div>
        <div className=" fw-bold d-flex justify-content-between align-items-center">
          <button onClick={() => inc_decBtn(event,itemInCart.product.id)} className=' btn-sm btn btn-secondary me-2' id='decrease'>
            <i className=' pe-none bi bi-dash-circle'></i>
          </button>
        <h5 className=' text-end me-2'>{itemInCart.quantity}</h5>
          <button onClick={() => inc_decBtn(event,itemInCart.product.id)} className=' btn-sm btn btn-secondary' id="increase">
            <i className=' pe-none bi bi-plus-circle'></i>
          </button>
        </div>
        
      </div>
    </div>
  )
}

export default CartItem
