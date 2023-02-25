import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React, { useState } from 'react'

const Product = ({item}) => {

   const [hoverEffect, setHoverEffect] = useState(" opacity-0");

   const handleHoverEnter = () => {
    setHoverEffect(' opacity-1 bg-[rgba(0,0,0,0.2)]')
   }

   const iconStyle = 'h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center m-3 cursor-pointer shadow-md hover:bg-[#894af3] hover:text-white hover:scale-[1.1] ease-in duration-100 cursor-pointer';
   
   const handleHoverExit = () => {
    setHoverEffect(' opacity-0')
   }
  return (
    <div className='flex items-center justify-center flex-1 min-w-[280px] overflow-hidden rounded-md shadow-lg m-2 relative' 
    onMouseEnter={handleHoverEnter}
    onMouseLeave={handleHoverExit}
    >
        <img src={item.src} alt="product_image"/>
        <div className={`flex items-center justify-center w-[100%] h-[100%] absolute ease-in duration-100 ${hoverEffect}`}>
        {/* icons */}
            <div className={iconStyle}>
                <ShoppingCartOutlined/>
            </div>
            <div className={iconStyle}>
                <FavoriteBorderOutlined/>
            </div>
            <div className={iconStyle}>
                <SearchOutlined />
            </div>
       </div> 
    </div>
  )
}

export default Product