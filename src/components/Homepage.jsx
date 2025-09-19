// import React, { useContext, useState } from 'react'
// // import Navbar from './Navbar'
// import Sidebar from './Sidebar'
// import Card1 from './Card1'
// import { MovieContext } from '../context/MovieContext'
// import Cardhead from './Cardhead'
// import Cardheader2 from '../components/Cardheader2'
// import { Link } from 'react-router-dom'

// function Homepage() {
//     const {popularmovie,movie,tvshows,setPopularmovie,allfucks}=useContext(MovieContext);
//     // console.log("allfucks wala state ahi",allfucks)
//     console.log(movie)
//     // console.log(popularmovie)

    
//   return (
//     <>
//     <div className='bg-[#1A1826]  h-min-screen flex '>
//       <Sidebar/>
    
//       <div className='flex-1 p-6'>
//         <div className='flex gap-5 mb-6'>
//             <Cardhead lola={movie.slice(0,3)}/>
//             </div>
//            <div className='mb-8'>
//              <h1 className='text-white text-2xl mb-3'><i class="fa-solid fa-thumbs-up  text-[#BD7BFE]"></i>Recomended</h1>
//             <div className='flex gap-4 mb-30 ' >
              
//                 <Cardheader2 lola={popularmovie.slice(0,4)}/>
//             </div> 
//            </div>
           
           
//             <h1 className='text-white text-2xl mb-3'><i class=" fa-solid fa-fire text-[#BD7BFE]"></i> Popular</h1>
//                 <div className='flex flex-wrap mb-8'>

//                      <Card1 lola={popularmovie.slice(0,18)}/>

//                 </div>
//                 <h1 className='text-white text-2xl mb-3'><i class=" fa-solid fa-fire text-[#BD7BFE]"></i> Movies</h1>
//                 <div className='flex flex-wrap mb-8'>

//                      <Card1 lola={movie.slice(0,6)}/>

//                 </div>

//                 <h1 className='text-white text-2xl mb-3  '><i class=" fa-solid fa-fire text-[#BD7BFE]"></i> TV Shows</h1>
//                 <div className='flex flex-wrap'>

//                      <Card1 lola={tvshows.slice(0,6)}/>

//                 </div>
                 
//       </div>
//     </div>
//     </>
//   )
// }

// export default Homepage

import React, { useContext, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Card1 from './Card1'
import { MovieContext } from '../context/MovieContext'
// import { useSidebar } from '../context/SidebarContext' // Import the sidebar context
import CardheadCarousel from './CardheadCarousel'
import Cardheader2Carousel from './Cardheader2Carousel'
import { Link } from 'react-router-dom'
import { SidebarContext } from '../context/SidebarContext'

function Homepage() {
    const { popularmovie, movie, tvshows, setPopularmovie, allfucks } = useContext(MovieContext);
    // const { isExpanded } = useSidebar(); // Get the expanded state
    console.log(movie)
    const {isExpanded}=useContext(SidebarContext)

    return (
        <>
            <div className='bg-[#1A1826] min-h-screen flex overflow-hidden'>
                <Sidebar />
                
                {/* Main content area with dynamic width based on sidebar state */}
                <div className={`flex-1 p-6 transition-all duration-300 ease-in-out overflow-x-hidden overflow-y-auto ${
                    isExpanded ? 'w-0' : 'w-'
                }`}>
                    <div className='mb-6'>
                        <CardheadCarousel lola={movie.slice(0,9)} />
                    </div>
                    
                    <div className='mb-8'>
                        <h1 className='text-white text-2xl mb-3'>
                            <i className="fa-solid fa-thumbs-up text-[#BD7BFE]"></i>
                            Recommended
                        </h1>
                        <div className='mb-10'>
                            <Cardheader2Carousel lola={popularmovie.slice(0, 12)} />
                        </div>
                    </div>

                    <h1 className='text-white text-2xl mb-3'>
                        <i className="fa-solid fa-fire text-[#BD7BFE]"></i> Popular
                    </h1>
                    <div className='grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-0 mb-8'>
                        <Card1 lola={popularmovie.slice(0, 18)} />
                    </div>

                    <h1 className='text-white text-2xl mb-3'>
                        <i className="fa-solid fa-fire text-[#BD7BFE]"></i> Movies
                    </h1>
                    <div className='grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-0 mb-8'>
                        <Card1 lola={movie.slice(0, 8)} />
                    </div>

                    <h1 className='text-white text-2xl mb-3'>
                        <i className="fa-solid fa-fire text-[#BD7BFE]"></i> TV Shows
                    </h1>
                    <div className='grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-0'>
                        <Card1 lola={tvshows.slice(0, 8)} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage