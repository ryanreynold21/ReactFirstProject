import React from 'react'

const Card = ({product , carts ,addToCart}) => {
  // console.log(carts)
  const isExistCard = carts.find( cart => cart.product.id === product.id)

  const starCount = (count) => {
    let result = '';
    for(let i=1; i<count; i++){
      result += "*";
    }
    return result;
  }
  return (
    <div className="card border rounded border-2 mb-3 shadow p-2 mt-5">
      <div className=" card-body text-center">
        <img src={product.image} alt="" height={100}/>
        <p className='fw-bold mt-3 text-truncate'>{product.title}</p>
        <p className='mt-3 text-truncate small w-100'>{product.description}</p>
          <h5 className=' text-info'>$ {product.price}</h5>
          <h4 className=''>{starCount(product.rating.rate)}</h4>
          {isExistCard ? (
                          <button className='m-0 w-100 p-2 btn btn-dark'>
            <i className=' bi bi-plus-circle me-2'></i>
             Added
             </button>
          ) : (
              <button className='m-0 w-100 p-2 btn btn-success' onClick={(_)=>addToCart(product.id)}>
            <i className=' bi bi-cart-plus me-2'></i>
             Add to cart
             </button>
          )}

      </div>
    </div>
  )
}

export default Card