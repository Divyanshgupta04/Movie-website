import React, { useContext, useState } from 'react'
// import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Card1 from './Card1'
import { MovieContext } from '../context/MovieContext'
import Cardhead from './Cardhead'
import Cardheader2 from '../components/Cardheader2'
import { Link } from 'react-router-dom'

function Homepage() {
    const {popularmovie,movie,tvshows,setPopularmovie,allfucks}=useContext(MovieContext);
    // console.log("allfucks wala state ahi",allfucks)
    console.log(movie)
    // console.log(popularmovie)

    // const [currentSlide, setCurrentSlide] = useState(0);
    
    // // For sliding one card at a time
    // const cardsPerView = 4; // Number of cards visible at once
    // const maxSlide = popularmovie.length - cardsPerView;
    
    // const nextSlide = () => {
    //     setCurrentSlide((prev) => 
    //         prev >= maxSlide ? 0 : prev + 1
    //     );
    // };
    
    // const prevSlide = () => {
    //     setCurrentSlide((prev) => 
    //         prev <= 0 ? maxSlide : prev - 1
    //     );
    // };


    // const [currentSlide, setCurrentSlide] = useState(0);
    
    // // For sliding one card at a time
    // const cardsPerView = 4; // Number of cards visible at once
    // const maxSlide = popularmovie.length - cardsPerView;
    
    // const nextSlide = () => {
    //     setCurrentSlide((prev) => 
    //         prev >= maxSlide ? 0 : prev + 1
    //     );
    // };
    
    // const prevSlide = () => {
    //     setCurrentSlide((prev) => 
    //         prev <= 0 ? maxSlide : prev - 1
    //     );
    // };


    //  const [currentSlide, setCurrentSlide] = useState(0);
    
    // const cardsPerView = 4;
    // const maxSlide = popularmovie.length - cardsPerView;
    
    // const nextSlide = () => {
    //     setCurrentSlide((prev) => 
    //         prev >= maxSlide ? 0 : prev + 1
    //     );
    // };
    
    // const prevSlide = () => {
    //     setCurrentSlide((prev) => 
    //         prev <= 0 ? maxSlide : prev - 1
    //     );
    // };

    // // Get current visible movies plus next one for smooth transition
    // const getVisibleMovies = () => {
    //     const start = currentSlide;
    //     const end = Math.min(start + cardsPerView + 1, popularmovie.length);
    //     return popularmovie.slice(start, end);
    // };



    const [currentSlide, setCurrentSlide] = useState(0);
    
    const cardsPerView = 4;
    const maxSlide = popularmovie.length - cardsPerView;
    
    const nextSlide = () => {
        setCurrentSlide((prev) => 
            prev >= maxSlide ? 0 : prev + 1
        );
    };
    
    const prevSlide = () => {
        setCurrentSlide((prev) => 
            prev <= 0 ? maxSlide : prev - 1
        );
    };

    const getVisibleMovies = () => {
        const start = currentSlide;
        const end = Math.min(start + cardsPerView + 1, popularmovie.length);
        return popularmovie.slice(start, end);
    };
  return (
    <>
    <div className='bg-[#1A1826]  h-min-screen flex '>
      <Sidebar/>
    
      <div className='flex-1 p-6'>
        <div className='flex gap-5 mb-6'>
            <Cardhead lola={movie.slice(0,3)}/>
            </div>
           {/* <div className='mb-8'>
             <h1>recom</h1>
            <div className='flex gap-4 mb-30 ' >
              
                <Cardheader2 lola={popularmovie.slice(0,4)}/>
            </div> 
           </div> */}
            {/* <div className='mb-8'>
                        <div className='flex items-center justify-between mb-4'>
                            <h2 className='text-white text-xl font-semibold'>Recommended</h2>
                            <div className='flex gap-2'>
                                <button 
                                    onClick={prevSlide}
                                    className='bg-[#BD7BFE] hover:bg-[#a666e8] text-white p-2 rounded-full transition-colors duration-200'
                                    disabled={popularmovie.length <= cardsPerView}
                                >
                                    <i className="fa-solid fa-chevron-left"></i>
                                </button>
                                <button 
                                    onClick={nextSlide}
                                    className='bg-[#BD7BFE] hover:bg-[#a666e8] text-white p-2 rounded-full transition-colors duration-200'
                                    disabled={popularmovie.length <= cardsPerView}
                                >
                                    <i className="fa-solid fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                        
                        {/* Simply show only the current slice of cards */}
                        {/* <div className='transition-all duration-300 ease-in-out flex'>
                            <Cardheader2 lola={popularmovie.slice(currentSlide, currentSlide + cardsPerView)}/>
                        </div>
                    </div>  */}

                    {/* <div className='mb-8'>
                        <div className='flex items-center justify-between mb-4'>
                            <h2 className='text-white text-xl font-semibold'>Recommended</h2>
                            <div className='flex gap-2'>
                                <button 
                                    onClick={prevSlide}
                                    className='bg-[#BD7BFE] hover:bg-[#a666e8] text-white p-2 rounded-full transition-colors duration-200'
                                    disabled={currentSlide === 0}
                                >
                                    <i className="fa-solid fa-chevron-left"></i>
                                </button>
                                <button 
                                    onClick={nextSlide}
                                    className='bg-[#BD7BFE] hover:bg-[#a666e8] text-white p-2 rounded-full transition-colors duration-200'
                                    disabled={currentSlide >= maxSlide}
                                >
                                    <i className="fa-solid fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                        
                        <div className='relative overflow-hidden'>
                            <div 
                                className='flex transition-transform duration-300 ease-in-out'
                                style={{
                                    transform: `translateX(-${currentSlide * 25}%)` // Move by 25% (1 card width)
                                }}
                            >
                                <div className='flex gap-4 min-w-full'>
                                    <Cardheader2 lola={popularmovie}/>
                                </div>
                            </div>
                        </div>
                    </div> */}
{/* 
                     <div className='mb-8'>
                        <div className='flex items-center justify-between mb-4'>
                            <h2 className='text-white text-xl font-semibold'>Recommended</h2>
                            <div className='flex gap-2'>
                                <button 
                                    onClick={prevSlide}
                                    className='bg-[#BD7BFE] hover:bg-[#a666e8] text-white p-2 rounded-full transition-colors duration-200'
                                    disabled={currentSlide === 0}
                                >
                                    <i className="fa-solid fa-chevron-left"></i>
                                </button>
                                <button 
                                    onClick={nextSlide}
                                    className='bg-[#BD7BFE] hover:bg-[#a666e8] text-white p-2 rounded-full transition-colors duration-200'
                                    disabled={currentSlide >= maxSlide}
                                >
                                    <i className="fa-solid fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                        
                        <div className='overflow-hidden'>
                            <div 
                                className='flex transition-transform duration-300 ease-in-out'
                                style={{
                                    transform: `translateX(-${(currentSlide * 100) / cardsPerView}%)`
                                }}
                            >
                                <Cardheader2 lola={getVisibleMovies()}/>
                            </div>
                        </div>
                    </div> */}

                     
                    {/* Slider Section */}
                    <div className='mb-8'>
                        <div className='flex items-center justify-between mb-4'>
                            <h2 className='text-white text-xl font-semibold'>Recommended</h2>
                            <div className='flex gap-2'>
                                <button 
                                    onClick={prevSlide}
                                    className='bg-[#BD7BFE] hover:bg-[#a666e8] text-white p-2 rounded-full transition-colors duration-200'
                                    disabled={currentSlide === 0}
                                >
                                    <i className="fa-solid fa-chevron-left"></i>
                                </button>
                                <button 
                                    onClick={nextSlide}
                                    className='bg-[#BD7BFE] hover:bg-[#a666e8] text-white p-2 rounded-full transition-colors duration-200'
                                    disabled={currentSlide >= maxSlide}
                                >
                                    <i className="fa-solid fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                        
                        <div className='overflow-hidden'>
                            <div 
                                className='flex transition-transform duration-300 ease-in-out'
                                style={{
                                    transform: `translateX(-${(currentSlide * 100) / cardsPerView}%)`
                                }}
                            >
                                <Cardheader2 lola={getVisibleMovies()}/>
                            </div>
                        </div>
                    </div>

           
            <h1 className='text-white text-2xl mb-3'><i class=" fa-solid fa-fire text-[#BD7BFE]"></i> Popular</h1>
                <div className='flex flex-wrap mb-8'>

                     <Card1 lola={popularmovie.slice(0,18)}/>

                </div>
                <h1 className='text-white text-2xl mb-3'><i class=" fa-solid fa-fire text-[#BD7BFE]"></i> Movies</h1>
                <div className='flex flex-wrap mb-8'>

                     <Card1 lola={movie.slice(0,6)}/>

                </div>

                <h1 className='text-white text-2xl mb-3  '><i class=" fa-solid fa-fire text-[#BD7BFE]"></i> TV Shows</h1>
                <div className='flex flex-wrap'>

                     <Card1 lola={tvshows.slice(0,6)}/>

                </div>
                 
      </div>
    </div>
    </>
  )
}

export default Homepage

