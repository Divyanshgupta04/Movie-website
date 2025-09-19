import React, { useContext } from 'react'
import { MovieContext } from '../context/MovieContext'
import { SidebarContext } from '../context/SidebarContext'
import Card1 from './Card1'
import Sidebar from './Sidebar'

function Searchpage() {
    const { searchdata, searchtext, isLoading, popularmovie, clearSearch } = useContext(MovieContext)
    const { isExpanded } = useContext(SidebarContext)
    
    return (
        <div className='bg-[#1A1826] min-h-screen flex overflow-hidden'>
            <Sidebar />
            
            {/* Main content area with dynamic width based on sidebar state */}
            <div className={`flex-1 p-4 sm:p-6 transition-all duration-300 ease-in-out overflow-x-hidden overflow-y-auto ${
                isExpanded ? 'w-0' : 'w-full'
            }`}>
                <div className="flex items-center justify-between mb-6">
                    <h1 className='text-2xl sm:text-3xl text-white flex items-center'>
                        <i className="fa-solid fa-magnifying-glass text-[#BD7BFE] mr-2"></i>
                        {searchtext ? 'Search Results' : 'Search'}
                        {searchtext && (
                            <span className='text-lg sm:text-xl ml-2 text-gray-300 font-normal'>
                                for "{searchtext}"
                            </span>
                        )}
                    </h1>
                    
                    {searchtext && (
                        <button
                            onClick={clearSearch}
                            className="bg-[#251E34] hover:bg-[#3a3153ff] text-white px-4 py-2 rounded-lg text-sm transition-colors duration-200"
                        >
                            <i className="fa-solid fa-times mr-2"></i>
                            Clear Search
                        </button>
                    )}
                </div>
                
                {isLoading ? (
                    <div className='flex flex-col items-center justify-center py-20'>
                        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#BD7BFE] mb-4"></div>
                        <h2 className='text-xl text-white mb-2'>Searching...</h2>
                        <p className='text-gray-400'>Please wait while we find your movies and shows</p>
                    </div>
                ) : searchdata && searchdata.length > 0 ? (
                    <>
                        <p className='text-gray-400 mb-4 text-sm sm:text-base'>
                            Found {searchdata.length} results
                        </p>
                        <div className='grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 gap-0'>
                            <Card1 lola={searchdata} />
                        </div>
                    </>
                ) : searchtext ? (
                    <div className='flex flex-col items-center justify-center py-20'>
                        <i className="fa-solid fa-film-slash text-6xl text-gray-600 mb-4"></i>
                        <h2 className='text-xl text-gray-400 mb-2'>No results found</h2>
                        <p className='text-gray-500 text-center max-w-md mb-4'>
                            No movies or TV shows found for "{searchtext}". Try different keywords or check your spelling.
                        </p>
                        <button
                            onClick={clearSearch}
                            className="bg-[#BD7BFE] hover:bg-[#9B92FE] text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
                        >
                            Browse Popular Movies
                        </button>
                    </div>
                ) : (
                    <div className='space-y-8'>
                        <div className='text-center py-12'>
                            <i className="fa-solid fa-search text-6xl text-[#BD7BFE] mb-4"></i>
                            <h2 className='text-2xl text-white mb-2'>Welcome to Search</h2>
                            <p className='text-gray-400 text-lg mb-6'>Use the search bar above to find your favorite movies and TV shows</p>
                        </div>
                        
                        <div>
                            <h2 className='text-xl text-white mb-4 flex items-center'>
                                <i className="fa-solid fa-fire text-[#BD7BFE] mr-2"></i>
                                Popular Movies While You Browse
                            </h2>
                            <div className='grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 gap-0'>
                                <Card1 lola={popularmovie.slice(0, 12)} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Searchpage