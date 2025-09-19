import React, { useContext } from 'react'
import { MovieContext } from '../context/MovieContext'
import { SidebarContext } from '../context/SidebarContext'
import Card1 from './Card1'
import Sidebar from './Sidebar'

function Searchpage() {
    const { searchdata, searchtext } = useContext(MovieContext)
    const { isExpanded } = useContext(SidebarContext)
    
    return (
        <div className='bg-[#1A1826] min-h-screen flex overflow-hidden'>
            <Sidebar />
            
            {/* Main content area with dynamic width based on sidebar state */}
            <div className={`flex-1 p-4 sm:p-6 transition-all duration-300 ease-in-out overflow-x-hidden overflow-y-auto ${
                isExpanded ? 'w-0' : 'w-full'
            }`}>
                <h1 className='text-2xl sm:text-3xl text-white mb-6 flex items-center'>
                    <i className="fa-solid fa-magnifying-glass text-[#BD7BFE] mr-2"></i>
                    Search Results
                    {searchtext && (
                        <span className='text-lg sm:text-xl ml-2 text-gray-300 font-normal'>
                            for "{searchtext}"
                        </span>
                    )}
                </h1>
                
                {searchdata && searchdata.length > 0 ? (
                    <>
                        <p className='text-gray-400 mb-4 text-sm sm:text-base'>
                            Found {searchdata.length} results
                        </p>
                        <div className='grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-0'>
                            <Card1 lola={searchdata} />
                        </div>
                    </>
                ) : (
                    <div className='flex flex-col items-center justify-center py-20'>
                        <i className="fa-solid fa-film-slash text-6xl text-gray-600 mb-4"></i>
                        <h2 className='text-xl text-gray-400 mb-2'>No results found</h2>
                        <p className='text-gray-500 text-center max-w-md'>
                            Try adjusting your search terms or browse our popular movies and TV shows instead.
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Searchpage