import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Cardheader2Carousel({lola}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4; // Show 4 items at once
  const maxIndex = Math.max(0, Math.ceil(lola.length / itemsPerPage) - 1);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const startIndex = currentIndex * itemsPerPage;
  const visibleItems = lola.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="relative">
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
        disabled={lola.length <= itemsPerPage}
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>

      {/* Cards Container */}
      <div className="flex gap-4 transition-all duration-500 ease-in-out">
        {visibleItems.map((item, index) => (
          <Link key={item.id} to={`/page/${item.id}`}>
            <div className='h-[65px] w-[230px] bg-[#251E34] flex items-center gap-2 text-white px-3 rounded-xl'>
              <div className=''>
                <img 
                  className='h-[50px] w-[50px] rounded-md' 
                  src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                  alt={item.title || item.original_name}
                />
              </div>
              <div className='flex flex-col w-full h-full'>
                <h1 className='truncate'>{item.title || item.original_name}</h1>
                <h1 className=''>{item.release_date || item.first_air_date}</h1>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
        disabled={lola.length <= itemsPerPage}
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>

      {/* Dots Indicator */}
      {lola.length > itemsPerPage && (
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex ? 'bg-[#BD7BFE]' : 'bg-gray-500'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Cardheader2Carousel
