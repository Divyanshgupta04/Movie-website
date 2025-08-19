import React from 'react'

function Cardheader2({lola}) {
  return (
    <>
    {lola.map((item,index)=>{
        return(
          <div key={index} className='h-[65px] w-[230px] bg-[#251E34] flex items-center gap-2 text-white px-3 rounded-xl'>
        <div className=''>
            <img className='h-[50px] w-[50px] rounded-md' src={`https://image.tmdb.org/t/p/w500//${item.backdrop_path}`}/>
        </div>
        <div className='flex flex-col w-full h-full '>
            <h1 className='truncate'>{item.title}</h1>
            <h1 className=''>{item.release_date}</h1>
        </div>
    </div>
        )
    })}
    </>
  )
}

export default Cardheader2