import { FaRegDotCircle } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {

    const footerData = [
        {
            title:"ई-आफि़स",
            link:""
        },
        {
            title:"वीडियो गैलरी",
            link:""
        },
        {
            title:"डाउनलोड",
            link:""
        },
        {
            title:"ओजीडी पोर्टल",
            link:""
        },
        {
            title:"हाइपरलिंक नीति",
            link:""
        },
        {
            title:"उपयोग की शर्तें",
            link:""
        },
        {
            title:"गोपनीयता नीति",
            link:""
        },
        {
            title:"अस्वीकरण",
            link:""
        },
        {
            title:"साइटमैप",
            link:""
        },
        {
            title:"कॉपीराइट",
            link:""
        },
        {
            title:"सुझाव",
            link:""
        },
        {
            title:"सहायता",
            link:""
        },
        {
            title:"पूछे जाने वाले प्रश्न",
            link:""
        },
        {
            title:"संपर्क करें",
            link:""
        },
    ]
    
    const smallImgSrc = [
        "https://mp.gov.in/assets/img/logo/108.png",
        "https://mp.gov.in/assets/img/logo/181.png",
        "https://mp.gov.in/assets/img/logo/1091.png",
        "https://mp.gov.in/assets/img/logo/1098.png",
        "https://mp.gov.in/assets/img/logo/dial100.png",
    ]
    
  return (
    <>
        <div className=" h-[52vh]  w-full bg-[#032401] text-white ">
            
            {/* upper */}
            <div className=" w-[90%] p-5 mx-auto  h-[30vh] flex justify-center flex-wrap gap-y-2  ">

                {
                    footerData.map((dets) => (
                        <a className="flex items-center gap-4 mx-5 opacity-80 ">
                            <FaRegDotCircle className='text-yellow-300 '  />
                            <span> {dets.title} </span>
                        </a>
                    ))
                }
                
                

            </div>

            {/* middle */}
            <div className="flex justify-center w-full h-fit gap-[3vw] ">

                <div className="w-[55%] border-2 border-gray-500 p-3 justify-center border-dotted flex gap-x-[5vw] flex-wrap h-[15vh] ">
                    <div className="flex gap-2"> <p className="font-semibold opacity-60 "> Last Update On : </p>  <p className="opacity-50"> 12 Mar 2024  </p> </div>
                    <div className="flex gap-2"> <p className="font-semibold opacity-60 "> Site Counter : : </p>  <p className="opacity-50"> 12 Mar 2024  </p> </div>
                    
                    <div className="flex h-fit">
                        <div className="font-mono border-r border-black text-black bg-yellow-500 px-0.5 "> 5 </div> 
                        <div className="font-mono border-r border-black text-black bg-yellow-500 px-0.5 "> 5 </div> 
                        <div className="font-mono border-r border-black text-black bg-yellow-500 px-0.5 "> 5 </div> 
                        <div className="font-mono border-r border-black text-black bg-yellow-500 px-0.5 "> 5 </div> 
                        <div className="font-mono border-r border-black text-black bg-yellow-500 px-0.5 "> 5 </div> 
                    </div>
                </div>

                <div className=" w-[25%] h-[15vh] flex justify-evenly ">

                    {
                        smallImgSrc.map((src)=>(
                            <div className=" w-[45px] h-[45px] rounded-md ">
                                <img src={src} alt="" className="w-full h-full " />
                            </div>
                        ))
                    }
                    
                </div>
                
            </div>

            {/* normal paragraph */}
            <div className="flex justify-center text-sm ">
                <p>The website is responsive and supports all the latest browsers.</p>
            </div>

        </div>
        
        <div className=" h-[10vh] text-white  bg-black flex text-sm justify-evenly ">
            <p>Content Provided and Maintained by MP INFO</p>
            <p>Copyright © 2024, Gov. of MP. All Rights Reserved.</p>
            <p>Designed & Developed by <a href="">Center of Excellence, MPSeDC.</a></p>
            <div className=" h-[40px] group hover:bg-white delay-150 hover:cursor-pointer w-[40px] flex justify-center items-center bg-yellow-600 rounded-full ">
                <IoIosArrowUp size={25} className="group-hover:text-black" />
            </div>
        </div>
    </>
  )
}

export default Footer