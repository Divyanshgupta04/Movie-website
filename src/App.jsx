import React, { useEffect, useState } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Navbar from './components/Navbar';
import Sidebar from './Components/Sidebar';
import Page from './components/Page';
import Testpage from './components/Testpage';
import Searchpage from './components/Searchpage';

function App() {

  return (
   <BrowserRouter>
    <div style={{backgroundColor:"#1A1826"}} className='h-fit'>
      <Navbar/>
      
    </div>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/home' element={<Homepage/>}/>
      <Route path='/page/:id' element={<Page/>}/>
      <Route path='/testpage' element={<Testpage/>}/>
      <Route path='/searchpage' element={<Searchpage/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
