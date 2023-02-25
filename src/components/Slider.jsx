import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import ApiSlides from '../apifolder/SliderApi'
import './Slider.css'

const Slider = () => {
   const [slides] = useState(ApiSlides);
   const [activeSlide, setActiveSlide] = useState(0);

  
   const nextSlide = () => {
        if (activeSlide === slides.length - 1) {
            setActiveSlide(0)
        }
        else {
            setActiveSlide(activeSlide + 1)
        }
   }

   const prevSlides = () => {
        if (activeSlide === 0) {
            setActiveSlide(slides.length - 1);
        }
        else {
            setActiveSlide(activeSlide - 1);
        }
   }
  return (
    <div className='parentDiv h-[540px] bg-white flex items-center justify-between mt-3 mobile:hidden'>
        {/* leftarrow */}
        <div className='leftarrow rounded-full bg-grey flex justify-center items-center shadow-sm hover:cursor-pointer'>
            <ArrowLeftOutlined style={{fontSize: "50px"}} onClick={prevSlides}/>
        </div>

        {/* slide div */}
        {slides.map((slide, index) => {
            if (index === activeSlide) {
                return (
                    <div className={`wrapper flex w-[100%] h-[500px] justify-center items-center shadow-2xl rounded-md	border-[#c0c0c0] border-10 overflow-hidden relative ${slide.background}`}>
                    <div className='slide flex items-center justify-center h-[100%]'>
                        <div className='forImage flex flex-1 justify-center items-center h-[100%]'>
                            <img 
                            className='h-[100%] w-[100%] object-cover bg-center'
                            src={slide.src} 
                            alt='alt_image'
                            />
                        </div>
                        <div className='des flex flex-col flex-1 place-items-start justify-center ml-11'>
                            <h2 className='text-[55px] font-bold'>{slide.content.h2}</h2>
                            <p className='text-[30px]'>{slide.content.p}</p>
                            <button className='btn'>Show Now</button>
                        </div>
                    </div>
                </div>
                )
            }
        })}
        {/* rightArrow */}
        <div className='rightarrow rounded-full bg-grey flex justify-center items-center shadow-sm hover:cursor-pointer'>
            <ArrowRightOutlined style={{fontSize: "50px"}} onClick={nextSlide}/>
        </div>
    </div>
  )
}

export default Slider