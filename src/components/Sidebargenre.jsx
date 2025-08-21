import React, { useState } from 'react'

function Sidebargenre() {
  const [genre,setGener]=useState([
    {name:"Action"},{name:"Action"},{name:"Action"},{name:"Action"},{name:"Action"},
    {name:"Action"},{name:"Action"},{name:"Action"},{name:"Action"},{name:"Action"},
    {name:"Action"},{name:"Action"},{name:"Action"},{name:"Action"},{name:"Action"},
    {name:"Action"},{name:"Action"},{name:"Action"},{name:"Action"},{name:"Action"},
    {name:"Action"},{name:"Action"},{name:"Action"},{name:"Action"},{name:"Action"},
    {name:"Action"},{name:"Action"},{name:"Action"},{name:"Action"},{name:"Action"},
    {name:"Action"},{name:"Action"},{name:"Action"},{name:"Action"},{name:"Action"},
    {name:"Action"},{name:"Action"},{name:"Action"},{name:"Action"},{name:"Action"},
    
   
  ])
  return (
   <>
   <div className='bg-[#14121F] w-[250px] h- flex flex-wrap p-3 ga-1 text-[#6B617C] rounded-md '>
          {genre.map((item,_)=>{
       return(
        <div className='h-[25px] w-[70px] rounded-md hover:text-[#BD7BFE] hover:bg-zinc-700 p-2 flex items-center justify-center '>
          <button className='text-xs ' >{item.name}</button>
        </div>
       )
      })}
   </div>
   </>
  )
}

export default Sidebargenre