

const PersonalityCard = ({data}) => {
  return (
    <div className=" w-[40vw] h-[25vh] flex gap-[5vw] justify-evenly border-2 border-white bg-[#aabb9f] shadow-2xl ">

        <img src={data.img} alt="" className=" h-[120px] w-[120px] " />

        <div className=" w-[20vw] flex flex-col gap-2 justify-end mb-3 items-center ">
            <p className=" font-semibold text-xl "> {data.name} </p>
            <div className=" w-[50%] h-[1px] bg-gray-500 "></div>
            <p className=" "> {data.position} </p>
        </div>
        
    </div>
  )
}

export default PersonalityCard