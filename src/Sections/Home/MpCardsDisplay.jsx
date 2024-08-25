import AboutMpCards from "@/app/components/AboutMp/AboutMpCards"


const MpCardsDisplay = () => {
  return (
    <div className=" relative my-[10vh] mx-auto shadow-xl h-[50vh] w-[80%] ">

        {/* upper background */}
        <div style={{backgroundImage:"url('https://mp.gov.in/assets/images/slider-bottom.png')",backgroundSize:"15px 23px"}} className="w-full h-5 "></div>

        <h1 className="text-center ">  मध्य प्रदेश के बारे में  </h1>  {/* title */}
        
        <AboutMpCards />

        {/* lower bg */}
        <div style={{backgroundImage:"url('https://mp.gov.in/assets/images/circle.png')",backgroundSize:"25px 20px"}} className=" h-5 w-full absolute bottom-[-3%] "></div>
        
    </div>
  )
}

export default MpCardsDisplay