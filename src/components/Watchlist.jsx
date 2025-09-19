import React, { useContext } from 'react';
import { useWatchlist } from '../context/WatchlistContext';
import { SidebarContext } from '../context/SidebarContext';
import WatchlistCard from './WatchlistCard';
import Sidebar from './Sidebar';

function Watchlist() {
    const { 
        watchlist, 
        sortBy, 
        setSortBy, 
        filterBy, 
        setFilterBy, 
        watchlistCount 
    } = useWatchlist();
    const { isExpanded } = useContext(SidebarContext);

    const getFilterCount = () => {
        switch (filterBy) {
            case 'movies':
                return watchlist.filter(item => item.media_type === 'movie').length;
            case 'tvShows':
                return watchlist.filter(item => item.media_type === 'tv').length;
            case 'watched':
                return watchlist.filter(item => item.watched).length;
            case 'unwatched':
                return watchlist.filter(item => !item.watched).length;
            default:
                return watchlist.length;
        }
    };

    const getWatchedStats = () => {
        const total = watchlistCount;
        const watched = watchlist.filter(item => item.watched).length;
        const movies = watchlist.filter(item => item.media_type === 'movie').length;
        const tvShows = watchlist.filter(item => item.media_type === 'tv').length;
        
        return { total, watched, unwatched: total - watched, movies, tvShows };
    };

    const stats = getWatchedStats();

    if (watchlistCount === 0) {
        return (
            <div className='bg-[#1A1826] min-h-screen flex overflow-hidden'>
                <Sidebar />
                <div className={`flex-1 p-6 transition-all duration-300 ease-in-out ${
                    isExpanded ? 'w-0' : 'w-'
                }`}>
                    <div className="text-center py-20">
                        <div className="text-[#BD7BFE] text-6xl mb-6">
                            <i className="fa-solid fa-heart-crack"></i>
                        </div>
                        <h2 className="text-white text-3xl font-bold mb-4">Your watchlist is empty</h2>
                        <p className="text-gray-400 text-lg mb-8">Start adding movies and TV shows to keep track of what you want to watch!</p>
                        <div className="flex justify-center">
                            <a 
                                href="/home" 
                                className="bg-[#BD7BFE] hover:bg-[#9B92FE] text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
                            >
                                Browse Movies & Shows
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className='bg-[#1A1826] min-h-screen flex overflow-hidden'>
            <Sidebar />
            
            <div className={`flex-1 p-6 transition-all duration-300 ease-in-out overflow-y-auto ${
                isExpanded ? 'w-0' : 'w-'
            }`}>
                {/* Header Section */}
                <div className="mb-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                        <div>
                            <h1 className="text-white text-4xl font-bold mb-2">
                                <i className="fa-solid fa-heart text-[#BD7BFE] mr-3"></i>
                                My Watchlist
                            </h1>
                            <p className="text-gray-400 text-lg">
                                {getFilterCount()} {filterBy === 'all' ? 'items' : filterBy.replace(/([A-Z])/g, ' $1').toLowerCase()} in your collection
                            </p>
                        </div>

                        {/* Stats Cards */}
                        <div className="flex flex-wrap gap-3 mt-4 lg:mt-0">
                            <div className="bg-[#251E34] px-4 py-2 rounded-lg border-l-4 border-[#BD7BFE]">
                                <div className="text-white text-lg font-bold">{stats.total}</div>
                                <div className="text-gray-400 text-sm">Total</div>
                            </div>
                            <div className="bg-[#251E34] px-4 py-2 rounded-lg border-l-4 border-green-500">
                                <div className="text-white text-lg font-bold">{stats.watched}</div>
                                <div className="text-gray-400 text-sm">Watched</div>
                            </div>
                            <div className="bg-[#251E34] px-4 py-2 rounded-lg border-l-4 border-blue-500">
                                <div className="text-white text-lg font-bold">{stats.movies}</div>
                                <div className="text-gray-400 text-sm">Movies</div>
                            </div>
                            <div className="bg-[#251E34] px-4 py-2 rounded-lg border-l-4 border-orange-500">
                                <div className="text-white text-lg font-bold">{stats.tvShows}</div>
                                <div className="text-gray-400 text-sm">TV Shows</div>
                            </div>
                        </div>
                    </div>

                    {/* Controls Section */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-6">
                        {/* Filter Controls */}
                        <div className="flex-1">
                            <label className="text-white text-sm font-medium mb-2 block">Filter by:</label>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    { key: 'all', label: 'All', icon: 'fa-list' },
                                    { key: 'movies', label: 'Movies', icon: 'fa-film' },
                                    { key: 'tvShows', label: 'TV Shows', icon: 'fa-tv' },
                                    { key: 'watched', label: 'Watched', icon: 'fa-eye' },
                                    { key: 'unwatched', label: 'Not Watched', icon: 'fa-eye-slash' }
                                ].map((filter) => (
                                    <button
                                        key={filter.key}
                                        onClick={() => setFilterBy(filter.key)}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                                            filterBy === filter.key
                                                ? 'bg-[#BD7BFE] text-white'
                                                : 'bg-[#251E34] text-gray-300 hover:bg-[#3a3153ff] hover:text-white'
                                        }`}
                                    >
                                        <i className={`fa-solid ${filter.icon} mr-2`}></i>
                                        {filter.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Sort Controls */}
                        <div className="sm:w-64">
                            <label className="text-white text-sm font-medium mb-2 block">Sort by:</label>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="w-full bg-[#251E34] text-white border border-[#3a3153ff] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#BD7BFE] focus:border-transparent"
                            >
                                <option value="dateAdded">Date Added (Newest)</option>
                                <option value="title">Title (A-Z)</option>
                                <option value="releaseDate">Release Date (Newest)</option>
                                <option value="watched">Watch Status</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Watchlist Grid */}
                {watchlist.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
                        {watchlist.map((item) => (
                            <WatchlistCard 
                                key={`${item.id}-${item.media_type}`} 
                                item={item} 
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <div className="text-[#BD7BFE] text-6xl mb-6">
                            <i className="fa-solid fa-filter"></i>
                        </div>
                        <h2 className="text-white text-2xl font-bold mb-4">No items match your filters</h2>
                        <p className="text-gray-400 text-lg">Try adjusting your filter or sort criteria</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Watchlist;
