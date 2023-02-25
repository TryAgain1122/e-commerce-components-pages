import React, { useState } from 'react'

const Counter = () => {
   const [counter, setCounter] = useState(0);

    const Increment = () => {
        setCounter(counter + 1 );
    }

    const Decrement = () => {

        setCounter(counter - 1 );
    }

  return (
    <div className='flex items-center justify-center text-2xl'>
        Quantity
        <div className='ml-5 shadow-md flex'>
            <div className='bg-[#8a4af3] text-white w-8 flex items-center justify-center cursor-pointer rounded-l-md' onClick={Decrement}>
                -
            </div>
            <div className='w-8 flex items-center justify-center border-[1px] border-[#8a4af3]'>
                {counter}
            </div>
            <div className='bg-[#8a4af3] text-white w-8 flex items-center justify-center cursor-pointer rounded-r-md' onClick={Increment}>
                +
            </div>
        </div>
    </div>
  )
}

export default Counter