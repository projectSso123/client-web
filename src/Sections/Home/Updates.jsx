'use client'

import UpdatesCard from "@/app/components/UpdatesCard"
import { Suspense, useEffect, useState } from "react"
import Loading from "@/app/components/Loding"
import { SERVER_URL, SERVER_FRONT } from "@/app/url"
const Updates = () => {

  const [newsContent,setNewsContent] = useState([]);
  const [notificationContent,setNotificationContent] = useState([]);

  const tazaKhabar = {
    heading : "ताज़ा खबर",
    readMoreLink : "https://mp.gov.in/news-details",
    content : [
      {
        description:"गेहूँ खरीदी में किसानों के लिए बेहतर व्यवस्था सुनिश्चित करें - मुख्यमंत्री डॉ. यादव",
        link:""
      },
      {
        description:"गेहूँ खरीदी में किसानों के लिए बेहतर व्यवस्था सुनिश्चित करें - मुख्यमंत्री डॉ. यादव",
        link:""
      },
      {
        description:"गेहूँ खरीदी में किसानों के लिए बेहतर व्यवस्था सुनिश्चित करें - मुख्यमंत्री डॉ. यादव",
        link:""
      },
      {
        description:"गेहूँ खरीदी में किसानों के लिए बेहतर व्यवस्था सुनिश्चित करें - मुख्यमंत्री डॉ. यादव",
        link:""
      },
    ]
  }
  const adhiniyam = {
    heading : "अधिनियम और नियम",
    readMoreLink : "https://mp.gov.in/actsrules",
    content : [
      {
        description:"गेहूँ खरीदी में किसानों के लिए बेहतर व्यवस्था सुनिश्चित करें - मुख्यमंत्री डॉ. यादव",
        link:""
      },
      {
        description:"गेहूँ खरीदी में किसानों के लिए बेहतर व्यवस्था सुनिश्चित करें - मुख्यमंत्री डॉ. यादव",
        link:""
      },
      {
        description:"गेहूँ खरीदी में किसानों के लिए बेहतर व्यवस्था सुनिश्चित करें - मुख्यमंत्री डॉ. यादव",
        link:""
      },
      {
        description:"गेहूँ खरीदी में किसानों के लिए बेहतर व्यवस्था सुनिश्चित करें - मुख्यमंत्री डॉ. यादव",
        link:""
      },
    ]
  }
  

  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    getNews()
    getNotification()
  },[]);


  return (
    <div className=" h-[100vh] w-full flex justify-evenly items-center  "
        style={{backgroundImage:"url('https://mp.gov.in/assets/images/headerbg.jpg')",backgroundAttachment:"fixed"}}
    >
        
        <>
      
          <UpdatesCard heading={"News"} content={newsContent} readMoreLink={tazaKhabar.readMoreLink} loading={loading}  />
        
          <UpdatesCard heading={"Notifications"} content={notificationContent} readMoreLink={adhiniyam.readMoreLink} loading={loading} />
          <UpdatesCard heading={"Achievements"} content={[]} readMoreLink={""} loading={loading}  />
        
        </>
    

    </div>
  )

  async function getNews()
  {
    let res =  await fetch(SERVER_URL+"api/v1/broadcast/getnews",{
			method: 'POST', 
      credentials:'include',
      mode:"cors",
			headers: {
			  'Content-Type': 'application/json', 
			},
			
		})
		
		if(res.ok)
		{
			let data = await res.json() ;
      console.log(data);
      setNewsContent(data);
      setLoading(false);

		}

  }

  async function getNotification()
  {
    let res =  await fetch(SERVER_URL+"api/v1/broadcast/getnotification",{
			method: 'POST', 
      credentials:'include',
      mode:"cors",
			headers: {
			  'Content-Type': 'application/json', 
			},
			
		})
		
		if(res.ok)
		{
			let data = await res.json() ;
      console.log(data);
      setNotificationContent(data);
      setLoading(false);
			
		}
		else{
		
		}
  }

}


export default Updates;