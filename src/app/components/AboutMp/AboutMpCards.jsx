import AboutMpCard from "./AboutMpCard"


const AboutMpCardData = [
  {
    img:"https://mp.gov.in/assets/img/icon/state.png",
    title:"राज्य प्रोफाइल"
  },
  {
    img:"https://mp.gov.in/assets/img/icon/tourism.png",
    title:"राज्य प्रोफाइल"
  },
  {
    img:"https://mp.gov.in/assets/img/icon/history.png",
    title:"राज्य प्रोफाइल"
  },
  {
    img:"https://mp.gov.in/assets/img/icon/education.png",
    title:"राज्य प्रोफाइल"
  },
  {
    img:"https://mp.gov.in/assets/img/icon/agriculture.png",
    title:"राज्य प्रोफाइल"
  },
  {
    img:"https://mp.gov.in/assets/img/icon/industry.png",
    title:"उद्योग"
  }
]

const AboutMpCards = () => {
  return (
    <div className=" mt-[5vh] mx-auto w-full h-[30vh] flex justify-center items-center bg-white " >

        {
          AboutMpCardData.map((dets) => (
              
            <>
              <AboutMpCard img={dets.img} title={dets.title} />
              <div className=" h-[50%] w-[1px] bg-gray-400 "></div>
            </>
              
          ))
        }

    </div>
  )
}

export default AboutMpCards