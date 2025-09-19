import { createContext, useEffect, useState } from "react";
import Testpage from "../components/Testpage";
import Page from "../components/Page";

export const MovieContext=createContext();

export const MovieProvider=(props)=>{
    const[popularmovie,setPopularmovie]=useState([]);
    const[movie,setMovie]=useState([]);
    const[tvshows,setTvshows]=useState([]);
    const[tvshowsimdb,setTvshowsimbd]=useState([]);
    const[searchdata,setSearchdata]=useState([]);
    const[searchtext,setSearchtext]=useState("")
    const[isLoading,setIsLoading]=useState(false);
    var [allfucks,setAllfucks]=useState([])
     allfucks=[...movie,...popularmovie,...tvshows]
    //  console.log("allfucks wala hai",allfucks)
     var[alldatasearch,setAlldatasearch]=useState([])

    // Load search data from localStorage on component mount
    useEffect(() => {
        const savedSearchData = localStorage.getItem('searchData');
        const savedSearchText = localStorage.getItem('searchText');
        if (savedSearchData) {
            setSearchdata(JSON.parse(savedSearchData));
        }
        if (savedSearchText) {
            setSearchtext(savedSearchText);
        }
    }, []);
    async function popfetch() {
        try{
            const res= await fetch('https://api.themoviedb.org/3/movie/popular?api_key=13d4837e94e5f773d6231e13908c4c7c')
        const data= await res.json();
        setPopularmovie(data.results);
        }
        catch (err) {
            console.log(err)
        }
    }
   

     async function moviefetch() {
        try{
            const res1= await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=13d4837e94e5f773d6231e13908c4c7c')
        const data1= await res1.json();
        setMovie(data1.results);
        // console.log(popularmovie )
        // console.log(data1.results)
        }
        catch (err) {
            console.log(err)
        }
    }
    useEffect(()=>{
        moviefetch();
         tvshowsfetch();
         popfetch();
         tvshowsimbdfetch();
    },[])

    async function tvshowsfetch(){
        try{
            const res=await fetch('https://api.themoviedb.org/3/tv/popular?api_key=13d4837e94e5f773d6231e13908c4c7c');
            let data=await res.json();
            setTvshows(data.results);
            // console.log("tvshows",data.results)
        }
        catch(err){
            console.log(err)
        }
    }
   
    // async function allthingsfetch(){
    //     try{
    //         let res= await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=13d4837e94e5f773d6231e13908c4c7c');
    //         // let res=await fetch('')
    //         let data= await res.json();
    //         let all=data.results;

    //         let res2=await fetch('https://api.themoviedb.org/3/movie/popular?api_key=13d4837e94e5f773d6231e13908c4c7c')
    //         let data2=await res2.json();
    //         let all2=data2.results;

    //         let res3=await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=13d4837e94e5f773d6231e13908c4c7c')
    //         let data3=await res3.json();
    //         let all3=data3.results;

    //          let res4=await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=13d4837e94e5f773d6231e13908c4c7c')
    //         let data4=await res4.json();
    //         let all4=data4.results

    //          let res5=await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=13d4837e94e5f773d6231e13908c4c7c')
    //         let data5=await res5.json();
    //         // console.log(data5.results);
    //         let all5=data5.results

    //         setAlldatasearch([...all5,...all4,...all3,...all2,...all])

    //         console.log("alldatasearch wala hai",alldatasearch)  
    //     }
    //     catch(err){
    //         console.log(err)
    //     }
    // }
    // useEffect(()=>{
    //     allthingsfetch();
    // },[])
    
     async function tvshowsimbdfetch(){
        try{
            const res=await fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=13d4837e94e5f773d6231e13908c4c7c');
            let data=await res.json();
            setTvshowsimbd(data.results);
            console.log("tvshowsimbd",data.results);
        }
        catch(err){
            console.log(err)
        }
    }


    async function handlesearch(searchtext) {
        try {
            setIsLoading(true);
            let res = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=13d4837e94e5f773d6231e13908c4c7c&query=${searchtext}`);
            let data = await res.json();
            
            setSearchdata(data.results);
            setSearchtext(searchtext);
            
            // Save to localStorage for persistence
            localStorage.setItem('searchData', JSON.stringify(data.results));
            localStorage.setItem('searchText', searchtext);
        } catch (error) {
            console.error('Search error:', error);
            setSearchdata([]);
        } finally {
            setIsLoading(false);
        }
    }
    
    // Function to clear search results
    const clearSearch = () => {
        setSearchdata([]);
        setSearchtext('');
        localStorage.removeItem('searchData');
        localStorage.removeItem('searchText');
    };
    

    return(
        <MovieContext.Provider value={{popularmovie,movie,tvshows,setSearchtext,searchtext,handlesearch,searchdata,allfucks,alldatasearch,tvshowsimdb,isLoading,clearSearch}}>
            {props.children}
        </MovieContext.Provider>
    )
}