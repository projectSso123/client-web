import Link from "next/link"


const BroadcastSidebar = () => {
  return (
    <div className=" fixed mt-[15vh] w-[16vw] h-[85vh] border-r-2 flex flex-col items-center bg-white py-3 gap-3 ">

        <Link href={"/dashboard/addNews"} className="px-3 py-2 text-sm rounded-md  hover:bg-green-200 transition-all w-[150px]  font-semibold ">
            Add News 
        </Link>

        <Link href={"/dashboard/"}  className="px-3 py-2 text-sm rounded-md  hover:bg-green-200 transition-all w-[150px]  font-semibold ">
            Add Banner
        </Link>

        <Link href={"/dashboard/addNotification"}  className="px-3 py-2 rounded-md  hover:bg-green-200 text-sm transition-all w-[150px]  font-semibold ">
            Add Notifications 
        </Link>

        
    </div>
  )
}

export default BroadcastSidebar