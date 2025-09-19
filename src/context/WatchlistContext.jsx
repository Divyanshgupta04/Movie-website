import { createContext, useContext, useEffect, useState } from 'react';

export const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
    const [watchlist, setWatchlist] = useState([]);
    const [sortBy, setSortBy] = useState('dateAdded'); // dateAdded, title, releaseDate, watched
    const [filterBy, setFilterBy] = useState('all'); // all, movies, tvShows, watched, unwatched

    // Load watchlist from localStorage on component mount
    useEffect(() => {
        const savedWatchlist = localStorage.getItem('movieWatchlist');
        if (savedWatchlist) {
            setWatchlist(JSON.parse(savedWatchlist));
        }
    }, []);

    // Save watchlist to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('movieWatchlist', JSON.stringify(watchlist));
    }, [watchlist]);

    // Add item to watchlist
    const addToWatchlist = (item) => {
        const watchlistItem = {
            id: item.id,
            title: item.title || item.original_name || item.name,
            poster_path: item.poster_path,
            release_date: item.release_date || item.first_air_date,
            media_type: item.media_type || (item.title ? 'movie' : 'tv'),
            overview: item.overview,
            vote_average: item.vote_average,
            dateAdded: new Date().toISOString(),
            watched: false
        };

        setWatchlist(prev => {
            const exists = prev.find(w => w.id === item.id && w.media_type === watchlistItem.media_type);
            if (exists) return prev;
            return [...prev, watchlistItem];
        });
    };

    // Remove item from watchlist
    const removeFromWatchlist = (id, media_type) => {
        setWatchlist(prev => prev.filter(item => 
            !(item.id === id && item.media_type === media_type)
        ));
    };

    // Toggle watched status
    const toggleWatched = (id, media_type) => {
        setWatchlist(prev => prev.map(item => 
            item.id === id && item.media_type === media_type
                ? { ...item, watched: !item.watched }
                : item
        ));
    };

    // Check if item is in watchlist
    const isInWatchlist = (id, media_type) => {
        return watchlist.some(item => item.id === id && item.media_type === media_type);
    };

    // Get filtered and sorted watchlist
    const getFilteredWatchlist = () => {
        let filtered = [...watchlist];

        // Apply filters
        switch (filterBy) {
            case 'movies':
                filtered = filtered.filter(item => item.media_type === 'movie');
                break;
            case 'tvShows':
                filtered = filtered.filter(item => item.media_type === 'tv');
                break;
            case 'watched':
                filtered = filtered.filter(item => item.watched);
                break;
            case 'unwatched':
                filtered = filtered.filter(item => !item.watched);
                break;
            default:
                break;
        }

        // Apply sorting
        switch (sortBy) {
            case 'title':
                filtered.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'releaseDate':
                filtered.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
                break;
            case 'watched':
                filtered.sort((a, b) => a.watched - b.watched);
                break;
            case 'dateAdded':
            default:
                filtered.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
                break;
        }

        return filtered;
    };

    const value = {
        watchlist: getFilteredWatchlist(),
        addToWatchlist,
        removeFromWatchlist,
        toggleWatched,
        isInWatchlist,
        sortBy,
        setSortBy,
        filterBy,
        setFilterBy,
        watchlistCount: watchlist.length
    };

    return (
        <WatchlistContext.Provider value={value}>
            {children}
        </WatchlistContext.Provider>
    );
};

export const useWatchlist = () => {
    const context = useContext(WatchlistContext);
    if (!context) {
        throw new Error('useWatchlist must be used within a WatchlistProvider');
    }
    return context;
};
