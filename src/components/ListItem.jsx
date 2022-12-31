import React from 'react'

const ListItem = ({filtered}) => {
    // console.log(filtered)
    console.log(filtered.length)
  return (
    <>

      {filtered.length === 20 ? "" : (
                <div className="">

        <ul className="item-collector text-truncate list-unstyled rounded rounded-3">
            {filtered.map(item => (
              
                <li className=' m-3' key={item.id}>
                <img src={item.image} width={40} alt="" />  
                <p className=' text-truncate ms-3 d-inline'>{item.title}</p>  
                </li>
                )
                
                )}
        </ul>
                </div>
      )}

    </>
  )
}

export default ListItem