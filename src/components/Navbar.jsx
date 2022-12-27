import React, { useState } from 'react'
import Cart from './Cart'

const Navbar = ({carts,inc_decBtn,delCart}) => {
  const [openCart,setOpenCart] = useState(false);
  return (
    
  <>
    <div className=" container-fluid fixed-top">
      <div className=""></div>
      <div className="row">
        <div className="col-12">
          <div className="p-3 d-flex bg-light mt-2">
            <h3 className=''>Shop</h3>
            <div className="ms-auto d-flex">
              <input type="text" className=' form-control' />
              <button className="ms-2 btn btn-outline-primary">
                <i className='bi bi-search'></i>
              </button>
                  <button type="button"
                    className="btn btn-outline-primary position-relative ms-2"
                    onClick={(_) => setOpenCart(true)}
                    data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"
                    >
                <i className=' bi bi-cart'></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                  {carts.length}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </button>
            </div>
          {openCart &&  <Cart delCart={delCart} inc_decBtn={inc_decBtn} carts={carts}/>}
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Navbar