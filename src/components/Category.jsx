import React from 'react'

const Category = ({ item }) => {
  return (
    <div className='flex-1 m-2 shadow-lg rounded-md overflow-hidden relative'>
        <img src={item.src} className="w-[100%]" alt="category_img"/>
        <div className='flex absolute w-[100%] h-[100%] left-0 top-0 justify-center items-center flex-col'>
            <h2 className='text-white font-medium text-[30px]'>{item.title}</h2>
            <button className='btn'>See More</button>
        </div>
    </div>
  )
}

export default Category;