// import React, { useContext } from "react";
// import { MovieContext } from "../context/MovieContext";
// import { Link, useNavigate } from "react-router-dom";

// function Navbar() {
//   const { searchtext, setSearchtext, handlesearch } = useContext(MovieContext);
//   const navigate = useNavigate();

//   return (
//     <div
//       className="h-15 flex items-center gap-70 "
//       style={{ backgroundColor: "#251E34" }}
//     >
//       <div className="flex items-center gap-3 ml-3">
//         <h1 className="h-8 w-8 border flex items-center justify-center rounded-md bg-[#14121F]">
//           <i className="fa-solid fa-bars-staggered text-white"></i>
//         </h1>
//         <Link to='/home'><h1>
//           <i className="fa-solid fa-video text-3xl text-[#9B92FE]"></i>
//         </h1></Link>
//       </div>
//       <div style={{ backgroundColor: "#14121F" }} className="rounded-md">
//         <i className="fa-solid fa-magnifying-glass text-white ml-2"></i>{" "}
//         <input
//           className=" text-white w-130 "
//           style={{outline:"none"}}
//           placeholder="Search"
//           onChange={(e) => {
//             setSearchtext(e.target.value);
//             // handlesearch(e.target.value)
//             // navigate("/testpage")
//           }}
//           value={searchtext}
//         />
//         <button
//           className="text-white text-sm font-thin m-1 bg-[#251F35] px-2 py-1 hover:bg-[#3a3153ff] rounded-md"
//           onClick={() => {
//             if(searchtext.trim() !== "")  {
//             handlesearch(searchtext)
//             navigate("/searchpage")}
//           }}
//         >
//           <i className="fa-solid fa-droplet text-sm font-thin"></i>Fliter
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import { useSidebar } from "../context/SidebarContext"; // Import the sidebar context
import { useWatchlist } from "../context/WatchlistContext";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const { searchtext, setSearchtext, handlesearch } = useContext(MovieContext);
  const { toggleSidebar } = useSidebar(); // Get the toggle function
  const { watchlistCount } = useWatchlist();
  const navigate = useNavigate();

  return (
    <div
      className="h-14 sm:h-16 flex items-center justify-between px-2 sm:px-4 lg:px-6"
      style={{ backgroundColor: "#251E34" }}
    >
      {/* Left Section */}
      <div className="flex items-center gap-2 sm:gap-3">
        <h1 
          className="h-8 w-8 sm:h-9 sm:w-9 border flex items-center justify-center rounded-md bg-[#14121F] cursor-pointer hover:bg-[#BD7BFE] hover:text-black transition-colors duration-200"
          onClick={toggleSidebar}
        >
          <i className="fa-solid fa-bars-staggered text-white text-sm"></i>
        </h1>
        <Link to='/home'>
          <h1>
            <i className="fa-solid fa-video text-2xl sm:text-3xl text-[#9B92FE]"></i>
          </h1>
        </Link>
      </div>
      
      {/* Center Section - Search */}
      <div className="flex-1 max-w-md mx-2 sm:mx-4">
        <div style={{ backgroundColor: "#14121F" }} className="rounded-md flex items-center w-full">
          <i className="fa-solid fa-magnifying-glass text-white ml-2 text-sm"></i>
          <input
            className="text-white bg-transparent px-2 py-2 flex-1 text-sm outline-none"
            placeholder="Search..."
            onChange={(e) => {
              setSearchtext(e.target.value);
            }}
            value={searchtext}
          />
          <button
            className="text-white text-xs sm:text-sm font-thin m-1 bg-[#251F35] px-2 py-1 hover:bg-[#3a3153ff] rounded-md transition-colors duration-200 whitespace-nowrap"
            onClick={() => {
              if(searchtext.trim() !== "")  {
              handlesearch(searchtext)
              navigate("/searchpage")}
            }}
          >
            <i className="fa-solid fa-droplet text-xs mr-1"></i>
            <span className="hidden sm:inline">Filter</span>
          </button>
        </div>
      </div>
        
      {/* Right Section - Watchlist */}
      <div className="flex items-center">
        <Link 
          to="/watchlist"
          className="relative flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 bg-[#14121F] rounded-lg hover:bg-[#BD7BFE] transition-colors duration-200 group"
          title="My Watchlist"
        >
          <i className="fa-solid fa-heart text-white group-hover:text-white text-sm sm:text-lg"></i>
          {watchlistCount > 0 && (
            <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center font-bold">
              {watchlistCount > 99 ? '99+' : watchlistCount}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
}

export default Navbar;