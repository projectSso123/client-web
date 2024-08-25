

const AboutMpCard = ({img,title}) => {
  return (
    <div className=" w-[15vw] h-full border-b-4 border-transparent transition-all hover:border-blue-600 group ">

        {/* for image */}
        <div className=" w-full h-[80%] bg-white overflow-hidden flex justify-center items-center ">
            <img src={img} alt="" className=" w-full h-full object-cover scale-105 group-hover:scale-125 transition-all duration-700 " />
        </div>

        {/* title */}
        <h1 className=" text-center text-gray-900 "> {title} </h1>
      
    </div>
  )
}

export default AboutMpCard