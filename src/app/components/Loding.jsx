"use client"
function Loading(){
    return (
        <>
      <Skeleton></Skeleton>

        </>
    )
}

function Skeleton(){
    return (
        <div class=" shadow rounded-md p-4 max-w-sm w-full mx-auto ">
        <div class="animate-pulse flex space-x-4">
          
          <div class="flex-1 space-y-6 py-1">
            
            <div class="space-y-3">
            
              <div class="h-2 bg-white rounded"></div>
              <div class="h-2 bg-white rounded"></div>
              <div class="h-2 bg-white rounded"></div>
              <div class="h-2 bg-white rounded"></div>
              <div class="h-2 bg-white rounded"></div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Loading;