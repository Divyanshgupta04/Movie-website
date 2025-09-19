import React, { useEffect, useState } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
import Page from './components/Page';
import Testpage from './components/Testpage';
import Searchpage from './components/Searchpage';
import Moviepage from './sidebarcomponents/Moviepage';
import TVshowspage from './sidebarcomponents/TVshowspage';
import Tvshowsimdb from './sidebarcomponents/Tvshowsimdb';
import Watchlist from './components/Watchlist';
import { WatchlistProvider } from './context/WatchlistContext';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <WatchlistProvider>
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
          <Route path='/movies' element={<Moviepage/>}/>
          <Route path='/tvshows' element={<TVshowspage/>}/>
          <Route path='/topshows' element={<Tvshowsimdb/>}/>
          <Route path='/watchlist' element={<Watchlist/>}/>
        </Routes>
      </BrowserRouter>
    </WatchlistProvider>
  );
}

export default App;




