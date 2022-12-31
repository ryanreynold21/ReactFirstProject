import React, { useRef, useState } from 'react'
import ListItem from './ListItem';

const Search = ({products}) => {
  const inputRef = useRef();
  const [lists,setList] = useState(products)
  const [filtered,setFiltered] = useState([]);

  

    const filterProduct = () => {

      const searchProduct = inputRef.current.value.toLowerCase()
      const filteredProduct = products.filter((product) => {
        return product.title.toLowerCase().includes(searchProduct);
      })
     setFiltered([...filteredProduct])
    }

    const isExisted = filtered.length === 0
    
    // console.log(isExisted.length)
    
    
    // console.log(filtered)
  return (
    <>
     <input onChange={filterProduct} type="text" ref={inputRef} className=' form-control' />
     <button className="ms-2 btn btn-outline-primary">
                <i className='bi bi-search'></i>
              </button>
          {isExisted ? "" : ( <ListItem filtered={filtered} />)}
       
    </>
  )
}

export default Search