import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";
import Sidebar from "../components/Sidebar";

function Page() {
  const { popularmovie,allfucks,movie,tvshows,alldatasearch } = useContext(MovieContext);
  const { id } = useParams(); // get dynamic route param

  var [joselect, setJoselect] = useState([]);
  // var newfuck = popularmovie.map((item, index) => {
  //   if (item.id == id) {
  //     joselect = item;
  //   }
  // });
  // var alldata=[...tvshows,...movie,...popularmovie];
  var newfuck = [...tvshows,...movie,...popularmovie].map((item, index) => {
    if (item.id == id) {
      joselect = item;
    }
    else{
      return(<Page/>)
    }
  });
  //  
  // joselect=alldatasearch.find((item)=>String(item.id)===String(id))
  // console.log(joselect);

  // const found=alldatasearch.find((item)=>String(item.id)===String(id))
  // console.log(found)
  // console.log("all ids".alldatasearch.map((item,index)=>item.id))

//   if (alldatasearch && Array.isArray(alldatasearch)) {
//   console.log("all ids:", alldatasearch.map(item => item.id));
// } else {
//   console.log("alldatasearch is not ready yet:", alldatasearch);
// }

  return (
    <div className="h-min-screen flex bg-[#1A1826] ">
      <Sidebar />
      <div className="mt-5 ml-[50px] mb-[100px]">
        <div className=" flex-1 ">
          <div className="rounded-md mb-5">
            <img className="absolut object-cover h-[550px] w-[1100px]" src={`https://image.tmdb.org/t/p/w500/${joselect.backdrop_path  }`}/>

          </div>

          {/* <h1 className="text-white">test fuckh</h1> */}

          <div className="h-[410px] w-[1100px] bg-[#251E34] flex text-white rounded-md">
            <div className="w-[820px] p-3">
            <h1 className="text-3xl mb-3  font-semibold">{joselect.title||joselect.original_name}</h1>
            <div className="mb-2">
                <span className="text-xs bg-yellow-500 px-1 py-1 rounded-md"><i class="fa-solid fa-star"></i>{joselect.vote_average}</span>
                <span className="text-xs px-[5px] py-[3px] rounded border ">HD</span>
                <span>0 min</span>
            </div>
            <h1 className="mb-4 text-[#6B607D]">{joselect.overview}</h1>
            {/* <ol>
                <li>type</li>
                <li>type</li>
                <li>type</li>
                <li>type</li>
                <li>type</li>
            </ol> */}
            <div className="flex gap-8 mb-4 ">
                <div>
                    <h1>Type:</h1>
                    <h1>Country:</h1>
                    <h1>Genre:</h1>
                    <h1>Release:</h1>
                    <h1>Director:</h1>
                </div>
                <div>
                    <h1>{joselect.type}null</h1>
                    <h1>{joselect.original_language}</h1>
                    <h1>{joselect.genre_ids}</h1>
                    <h1>{joselect.release_date||joselect.first_air_date}</h1>
                    <h1>{joselect.director}null</h1>
                </div>
            </div>
            <h1 className="text-[#6B607D]">Watch Can You Feel the Beat: The Lisa Lisa Story 2025 Online Free,Can You Feel the Beat: The Lisa Lisa Story 2025 Online Free,Where to watch Can You Feel the Beat: The Lisa Lisa Story 2025,Can You Feel the Beat: The Lisa Lisa Story 2025 movie free online,Can You Feel the Beat: The Lisa Lisa Story 2025 free online,</h1>
          </div>
          <div>
            <img className="h-[410px] w-[280px]" src={`https://image.tmdb.org/t/p/w500${joselect.poster_path}`}/>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
