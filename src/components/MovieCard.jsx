import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useWatchlist } from '../context/WatchlistContext';

function MovieCard({ item }) {
    const { addToWatchlist, removeFromWatchlist, isInWatchlist } = useWatchlist();
    const [showPopup, setShowPopup] = useState('');
    const [popupTimeout, setPopupTimeout] = useState(null);
    
    const media_type = item.title ? 'movie' : 'tv';
    const inWatchlist = isInWatchlist(item.id, media_type);
    
    const handleWatchlistClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        // Clear existing timeout
        if (popupTimeout) {
            clearTimeout(popupTimeout);
        }
        
        if (inWatchlist) {
            removeFromWatchlist(item.id, media_type);
            setShowPopup('removed');
        } else {
            addToWatchlist({ ...item, media_type });
            setShowPopup('added');
        }
        
        // Hide popup after 4 seconds
        const timeout = setTimeout(() => {
            setShowPopup('');
        }, 4000);
        
        setPopupTimeout(timeout);
    };
    
    // Cleanup timeout on unmount
    useEffect(() => {
        return () => {
            if (popupTimeout) {
                clearTimeout(popupTimeout);
            }
        };
    }, [popupTimeout]);

    return (
        <div className='group relative overflow-hidden h-[240px] w-[120px] xs:h-[260px] xs:w-[140px] sm:h-[280px] sm:w-[160px] md:h-[300px] md:w-[190px] flex flex-col text-white transition-all duration-300'>
            <Link to={`/page/${item.id}`}>
                <img 
                    className='absolute inset-0 hover:scale-110 duration-300' 
                    src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}
                    alt={item.title || item.original_name}
                />
            </Link>

            {/* HD Badge */}
            <h1 className='absolute top-2 left-2 [text-shadow:_0_0_3px_theme(colors.blue-500)] text-white px-2 py-1 rounded text-xs font-bold'>HD</h1>
            
            {/* Watchlist Button */}
            <button
                onClick={handleWatchlistClick}
                className={`absolute top-2 right-2 p-2 rounded-full shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100 ${
                    inWatchlist 
                        ? 'bg-red-600 hover:bg-red-700 text-white' 
                        : 'bg-black/70 hover:bg-[#BD7BFE] text-white'
                } ${showPopup ? 'animate-heartbeat' : ''}`}
                title={inWatchlist ? '' : ''}
            >
                <i className={`${
                    inWatchlist ? 'fa-solid fa-heart text-red-300' : 'fa-regular fa-heart'
                } text-sm transition-transform duration-200 hover:scale-110`}></i>
            </button>
            
            {/* Minimal Popup Notification */}
            {showPopup && (
                <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2
                    px-3 py-1 rounded-full font-semibold text-white text-xs z-50
                    transition-all duration-300 ease-out
                    ${showPopup === 'added' 
                        ? 'bg-green-600' 
                        : 'bg-red-600'
                    } shadow-lg`}
                    style={{
                        animation: 'popupSlide 4s ease-out forwards',
                    }}
                >
                    {showPopup === 'added' ? 'Added' : 'Removed'}
                </div>
            )}
            
            {/* Content Overlay */}
            <div className='absolute bottom-0 flex-col bg-gradient-to-t from-black/90 via-black/60 to-transparent flex justify-center items-center w-full h-16 p-3'>
                <Link to={`/page/${item.id}`} className="w-full">
                    <h1 className='text-center truncate w-full text-[15px] hover:text-[#BD7BFE] transition-colors'>
                        {item.title || item.original_name}
                    </h1>
                    <div className='flex items-center justify-center'>
                        <i className="fa-solid fa-clapperboard text-sm mr-1 text-[#BD7BFE]"></i>
                        <h1 className='text-xs'>{item.release_date || item.first_air_date}</h1>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default MovieCard;
