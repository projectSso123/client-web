import SwiperComponentForBrands from "@/app/components/SwiperComponentForBrands"
import SwiperComponentOfPhotoGallery from "@/app/components/SwiperComponentOfPhotoGallery"


const PhotoGallery = () => {
  return (
    <div className="flex flex-col w-full h-[90vh] p-3 border-2 border-black gap-[5vh] ">

        <SwiperComponentOfPhotoGallery />
        <SwiperComponentForBrands />
        
    </div>
  )
}

export default PhotoGallery