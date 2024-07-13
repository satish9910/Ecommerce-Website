import React, { useRef } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderdata } from '../data/Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SimpleSlider=()=>{
  const sliderRef=useRef()
  const next =()=>{
    if (sliderRef.current){
      sliderRef.current.slickNext();
    }
  }
  const prev =()=>{
    if (sliderRef.current){
      sliderRef.current.slickPrev();
    }
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  
  return (
    <div className='overflow-hidden relative '>
    <Slider ref={sliderRef} {...settings}>
      {
        sliderdata.map((val,index)=>(
          <div key={index} className=''>
            <img src={val.img} alt='img' className='h-2/3 object-fill'/>
          </div>
        ))
      }
      </Slider>
      <FontAwesomeIcon onClick={prev} icon="angle-left" className='bg-white absolute  top-20 md:top-64 left-4 p-2 text-black font-bold size-4 md:size-8 hover:bg-red-500 hover:text-white'/>
      <FontAwesomeIcon onClick={next} icon="angle-right"  className='bg-white absolute  top-20 md:top-64 right-4 p-2 text-black font-bold size-4 md:size-8 hover:bg-red-500 hover:text-white'/>
    </div>
  
  );

  
}

export default SimpleSlider
