import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function CardheadCarousel({lola}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3; // Show 3 items at once
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
      <div className="flex gap-5 transition-all duration-500 ease-in-out">
        {visibleItems.map((item, index) => (
          <Link key={item.id} to={`/page/${item.id}`}>
            <div className='overflow-hidden relative h-[215px] w-[360px] bg-[#251E34] flex rounded-lg'>
              <img 
                className='absolute object rounded-lg hover:scale-115 duration-300' 
                src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                alt={item.title}
              />
              <div className='relative flex flex-col w-full rounded-lg mt-36 px-6 bg-gradient-to-t from-[#251E34]/100 via-[#251E34]/90 to-transparent text-white'>
                <div className='mt'>
                  <h1 className='text-2xl font-bold truncate'>{item.title}</h1>
                </div>
                <div className='flex justify-between'>
                  <div className='flex gap-2'>
                    <h1><i className="fa-solid fa-star"></i>{item.vote_average}</h1>
                    <h1>{item.release_date}</h1>
                  </div>
                  <h1 className='italic px-1 py- border flex items-center justify-center'>HD</h1>
                </div>
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

export default CardheadCarousel
