"use client"

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

// const SwiperImgData = [
//     "https://mp.gov.in/uploads/slider/sliderstateportal17060010621208975201.jpg",
//     "https://mp.gov.in/uploads/slider/webbanners2(4)17060100411127136992.png",
// ]

export default function SwiperComponentOfHero() {
  
  const [loading,setLoading] = useState(true);
  const [swiperImgData,setSwiperImgData] = useState([]);
  
  useEffect(()=>{
    getLinks();
  },[]);

  const getLinks = async()=>{
    setLoading(true);
    try {
      const res = await fetch('http://localhost:3001/api/getHeroSliderImages');
      console.log("got links....")
      const resJson = await res.json();
      setSwiperImgData(resJson);
      
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  }
  
  return (
    <>
      {
        loading ? <div>Loading...</div>
        :
        <Swiper
          navigation={true}
          pagination={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
       
       {
        swiperImgData?.map((src)=>(
            <SwiperSlide > 
                <div className=' h-[80vh] mx-auto w-[95%] border border-black '> 
                    <img src={src} alt={"imgs"} className='h-full ' />
                </div> 
            </SwiperSlide>
        ))
       }
       
        </Swiper>
      }
    </>
  );
  
}
