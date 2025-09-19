import React, { useContext } from 'react'
import { MovieContext } from '../context/MovieContext'
import { SidebarContext } from '../context/SidebarContext'
import Sidebar from '../components/Sidebar'
import Card1 from '../components/Card1'

function Moviepage() {
    const { movie } = useContext(MovieContext)
    const { isExpanded } = useContext(SidebarContext)
    
    return (
        <div className='bg-[#1A1826] min-h-screen flex overflow-hidden'>
            <Sidebar />
            
            {/* Main content area with dynamic width based on sidebar state */}
            <div className={`flex-1 p-4 sm:p-6 transition-all duration-300 ease-in-out overflow-x-hidden overflow-y-auto ${
                isExpanded ? 'w-0' : 'w-full'
            }`}>
                <h1 className='text-2xl sm:text-3xl text-white mb-6 flex items-center'>
                    <i className="fa-solid fa-film text-[#BD7BFE] mr-2"></i>
                    Movies
                </h1>
                
                <div className='grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-0'>
                    <Card1 lola={movie} />
                </div>
            </div>
        </div>
    )
}

export default Moviepage