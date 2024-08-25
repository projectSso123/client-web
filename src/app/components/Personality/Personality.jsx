import PersonalityCard from "./PersonalityCard"

const PersonalityCardData = [
    {
      img:"https://mp.gov.in/uploads/files/MP-Governer-1.png",
      name:"श्री मंगुभाई छ. पटेल",
      position:"राज्यपाल , मध्य प्रदेश"
    },
    {
      img:"https://mp.gov.in/uploads/files/cm-mp1.png",
      name:"डॉ. मोहन यादव",
      position:"मुख्यमंत्री , मध्य प्रदेश"
    }

]

const Personality = () => {
  return (
    <div className=" h-[30vh] w-full flex justify-evenly p-5 bg-white ">
        
        {
            PersonalityCardData.map((person)=>(
                <PersonalityCard data={person} />
            ))
        }

    </div>
  )
}

export default Personality