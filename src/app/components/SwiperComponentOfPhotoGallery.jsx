"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination, Keyboard } from 'swiper/modules';

const PhotoGalleryImgdata = [
    "https://mp.gov.in/uploads/slider/115408950591366744734.jpg",
    "https://mp.gov.in/uploads/slider/2154089506720190401.jpg",
    "https://mp.gov.in/uploads/slider/315408950711327216691.jpg",
    "https://mp.gov.in/uploads/slider/41540895075342827924.jpg",
    "https://mp.gov.in/uploads/slider/51540895080787476895.jpg",
    "https://mp.gov.in/uploads/slider/61540895086261411528.jpg",
]

export default function SwiperComponentOfPhotoGallery() {
  return (
    <>
      <Swiper
        navigation={true}
        pagination={true}
        keyboard={true}
        autoplay={{delay:2000,disableOnInteraction:false}}
        slidesPerView={3}
        modules={[Navigation, Pagination, Keyboard]}
        className="mySwiper relative shadow-2xl flex px-2 items-center w-[90%] h-[60vh] "
      >
       
       {
        PhotoGalleryImgdata.map((src)=>(
            <SwiperSlide className='w-full h-[50vh] p-1 '>
                <Link href={src} className=' w-[95%] bg-red-500 h-[50vh]  overflow-hidden '>
                    <img src={src} alt='img' className='w-full h-full ' />
                </Link>
            </SwiperSlide>
        ))
       }
       
       
       {/* ribbon */}
       <div className=' absolute flex justify-center items-center top-2 z-[3] h-[40px] w-[90px] bg-[#FF9800] '>
            <p className='italic font-semibold '>गैलरी</p>
       </div>
       
      </Swiper>
    </>
  );
}
