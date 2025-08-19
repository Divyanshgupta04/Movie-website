import React, { useContext } from 'react'
import { MovieContext } from '../context/MovieContext'
import Card1 from './Card1'
import Sidebar from './Sidebar'

function Searchpage() {
  const {searchdata}=useContext(MovieContext)
  
  return (
    <div className='flex h-min-screen flex-wrap '>
      <Sidebar/>

      <div className='flex-1 bg-[#1A1826] pl-[22px] '>
        <h1 className='mt-5 text-2xl text-white mb-5'>Movies</h1>
        <div className='flex flex-wrap mb-[100px] '>
          <Card1 lola={searchdata}/>
        </div>
      </div>
    </div>
  )
}

export default Searchpage