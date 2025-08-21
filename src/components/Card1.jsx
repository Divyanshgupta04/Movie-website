import React, { useContext } from 'react'
import { MovieContext } from '../context/MovieContext';
import { Link } from 'react-router-dom';

function Card1({lola}) {
        // const {popularmovie,setPopularmovie}=useContext(MovieContext);
    
  return (
   <>
   {lola.map((item,index)=>{//slice method use kara ge chota ya desired array length ke liya 
      return(
         <Link to={`/page/${item.id}`}><div key={item.id} className='relative overflow-hidden h-[260px] w-[190px] flex flex-col text-white  ' >
         <img className='absolute inset-0 hover:scale-110 duration-300  ' src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}/>

        <h1 className='absolute p-2 font-bold italic text-xl'>HD</h1>
         <div className='absolute flex-col bg-gradient-to-t from-black/90 via-black/60 to-transparent  flex justify-center items-center w-full h-16 mt-52 p-3 '>
             <h1 className='text-center truncate w-full text-[15px]'>{item.title || item.original_name}</h1>
         <div className='flex items-center '>
             <i className="fa-solid fa-clapperboard text-sm mr-1 text-[#BD7BFE]"></i>
             <h1 className='text-xs' >{item.release_date || item.first_air_date}</h1>
         </div>
         </div>
       
     </div></Link>
      )
   })}
   </>
  )
}
//bg-gradient-to-t from-black/70 via-black/30 to-transparent
export default Card1

