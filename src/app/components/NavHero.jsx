'use client'

import Link from "next/link";
import { useRouter } from "next/router"


const NavHero = () => {
  
  
  
  return (
    <div className=" w-full h-[18vh] flex justify-evenly gap-[30vw] bg-white ">

        <div className="h-full ">
            <img src="https://mp.gov.in/assets/img/mp-logo-hin.png" alt="logo" />
        </div>


        <div className="flex items-center ">
            <Link
              href={"/login"}
              className=" p-1 px-5 h-[40px] bg-green-800 hover:bg-green-900 rounded-lg text-white font-semibold "> Login </Link>
            <img src="https://mp.gov.in/assets/img/ashok.png" alt="" className=" h-[80px] " />
        </div>
        
    </div>
  )
}

export default NavHero