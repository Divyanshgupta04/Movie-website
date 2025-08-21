import React, { useContext } from 'react'
import { MovieContext } from '../context/MovieContext'
import Sidebar from '../components/Sidebar'
import Card1 from '../components/Card1'

function Moviepage() {
    const{movie}=useContext(MovieContext)
  return (
    <div>
        <div className='flex h-min-screen flex-wrap '>
      <Sidebar/>

      <div className='flex-1 bg-[#1A1826] pl-[22px] '>
        <h1 className='mt-5 text-2xl text-white mb-5'>Movies</h1>
        <div className='flex flex-wrap mb-[100px] '>
          <Card1 lola={movie}/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Moviepage