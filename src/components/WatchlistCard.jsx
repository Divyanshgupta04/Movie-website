import React from 'react';
import { Link } from 'react-router-dom';
import { useWatchlist } from '../context/WatchlistContext';

function WatchlistCard({ item }) {
    const { removeFromWatchlist, toggleWatched } = useWatchlist();

    const handleRemove = (e) => {
        e.preventDefault();
        e.stopPropagation();
        removeFromWatchlist(item.id, item.media_type);
    };

    const handleToggleWatched = (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleWatched(item.id, item.media_type);
    };

    const formatDate = (dateString) => {
        if (!dateString) return 'Unknown';
        return new Date(dateString).getFullYear();
    };

    return (
        <div className="group relative bg-[#251E34] rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
            {/* Poster Image */}
            <div className="relative h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden">
                <Link to={`/page/${item.id}`}>
                    <img 
                        src={item.poster_path 
                            ? `https://image.tmdb.org/t/p/w500${item.poster_path}` 
                            : '/api/placeholder/300/450'
                        }
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                </Link>
                
                {/* HD Badge */}
                <div className="absolute top-2 left-2 bg-[#BD7BFE] text-white px-2 py-1 rounded text-xs font-bold">
                    HD
                </div>

                {/* Media Type Badge */}
                <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {item.media_type === 'movie' ? 'MOVIE' : 'TV SHOW'}
                </div>

                {/* Action Buttons */}
                <div className="absolute top-12 right-2 flex flex-col space-y-2">
                    {/* Remove from Watchlist */}
                    <button
                        onClick={handleRemove}
                        className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-full shadow-lg transition-colors duration-200"
                        title="Remove from watchlist"
                    >
                        <i className="fa-solid fa-trash text-sm"></i>
                    </button>

                    {/* Toggle Watched Status */}
                    <button
                        onClick={handleToggleWatched}
                        className={`${
                            item.watched 
                                ? 'bg-green-600 hover:bg-green-700' 
                                : 'bg-gray-600 hover:bg-gray-700'
                        } text-white p-2 rounded-full shadow-lg transition-colors duration-200`}
                        title={item.watched ? 'Mark as unwatched' : 'Mark as watched'}
                    >
                        <i className={`fa-solid ${item.watched ? 'fa-eye' : 'fa-eye-slash'} text-sm`}></i>
                    </button>
                </div>

                {/* Watched Overlay */}
                {item.watched && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <div className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                            <i className="fa-solid fa-check-circle"></i>
                            <span className="font-semibold">WATCHED</span>
                        </div>
                    </div>
                )}

                {/* Gradient Overlay for Text */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4">
                    <Link to={`/page/${item.id}`}>
                        <h3 className="text-white font-bold text-lg mb-2 line-clamp-2 hover:text-[#BD7BFE] transition-colors">
                            {item.title}
                        </h3>
                        
                        <div className="flex items-center justify-between text-sm text-gray-300">
                            <div className="flex items-center space-x-1">
                                <i className="fa-solid fa-clapperboard text-[#BD7BFE]"></i>
                                <span>{formatDate(item.release_date)}</span>
                            </div>
                            
                            {item.vote_average && (
                                <div className="flex items-center space-x-1">
                                    <i className="fa-solid fa-star text-yellow-500"></i>
                                    <span>{item.vote_average.toFixed(1)}</span>
                                </div>
                            )}
                        </div>
                    </Link>
                </div>
            </div>

            {/* Card Footer */}
            <div className="p-4 bg-[#1A1826]">
                <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>Added: {new Date(item.dateAdded).toLocaleDateString()}</span>
                    <div className={`px-2 py-1 rounded ${
                        item.watched 
                            ? 'bg-green-600/20 text-green-400' 
                            : 'bg-gray-600/20 text-gray-400'
                    }`}>
                        {item.watched ? 'Watched' : 'Not Watched'}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WatchlistCard;
