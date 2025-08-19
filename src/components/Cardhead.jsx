import React from 'react'

function Cardhead({lola}) {
  return (
    <>
    {lola.map((item,index)=>{
        return(
            <div key={index} className='overflow-hidden relative h-[215px] w-[360px] bg-[#251E34] flex rounded-lg '>
        <img className='absolute object rounded-lg hover:scale-115 duration-300' src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}/>

        <div className='relative flex flex-col w-full rounded-lg  mt-36 px-6 bg-gradient-to-t from-[#251E34]/100 via-[#251E34]/90 to-transparent text-white  '>
            <div className='mt'>
                <h1 className='text-2xl font-bold truncate '>{item.title}</h1>
            </div>
            <div className='flex justify-between'>
            <div className='flex gap-2'>
                    <h1><i class="fa-solid fa-star"></i>{item.vote_average}</h1>
                    <h1>{item.release_date}</h1>
            </div>
            <h1 className='italic px-1 py- border flex items-center justify-center '>HD</h1>
            </div>
        </div>
    </div>
        )
    })}
    </>
  )
}

export default Cardhead