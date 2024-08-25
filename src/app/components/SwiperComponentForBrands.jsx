"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination, Keyboard } from 'swiper/modules';

const BrandSwiperData = [
    {
        img:"https://mp.gov.in/uploads/impweb/mygov.jpg",
        link:"https://mp.mygov.in/"
    },
    {
        img:"https://mp.gov.in/uploads/impweb/national-portal-of-india.jpg",
        link:"https://india.gov.in/"
    },
    {
        img:"https://mp.gov.in/uploads/impweb/rajbhavan.jpg",
        link:"http://governor.mp.gov.in/"
    },
    {
        img:"https://www.mpinfo.org/",
        link:"https://mp.gov.in/uploads/impweb/mpinfo.jpg"
    },
    {
        img:"https://www.mpinfo.org/",
        link:"https://mp.gov.in/uploads/impweb/mpinfo.jpg"
    },
    {
        img:"http://www.mapit.gov.in/",
        link:"https://mp.gov.in/uploads/impweb/mapit.jpg"
    },
    {
        img:"http://code.mp.gov.in/",
        link:"https://mp.gov.in/uploads/impweb/mpcode.jpg"
    },
]

export default function SwiperComponentForBrands() {
  return (
    <>
      <Swiper
        keyboard={true}
        slidesPerView={5}
        modules={[Navigation, Pagination, Keyboard]}
        
        className="mySwiper relative shadow-2xl flex px-2 items-center w-[90%] h-[15vh] "
      >
       
       {
        BrandSwiperData.map((obj)=>(
            <SwiperSlide className='w-[150px] mx-[5vw] h-full p-1  '>
                    <img src={obj.img} alt='img' className='w-full h-full shadow-md shadow-gray-700 ' />
            </SwiperSlide>
        ))
       }
       
       
       
       
      </Swiper>
    </>
  );
}
