// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import Sidebargenre from "./Sidebargenre";

// function Sidebar() {
//   const [showcomponent, setShowcomponent] = useState(false);
//   const [showcomponent1, setShowcomponent1] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);
//   return (
//     <>
//       <div className="w-15 bg-[#0F0F17] h- p-4 pt-6 flex-col ">
//         <NavLink to="/home" className={({ isActive }) =>`bg-[#251E34] h-9 w-9 flex items-center justify-center rounded-md hover:bg-[#BD7BFE] hover:text-black text-white mb-4 ${isActive ? " bg-[#BD7BFE] text-black" : ""}`}>
//           <i className="fa-regular fa-house   "></i>
//         </NavLink>
//         <NavLink to="/movies" className={({ isActive }) =>`bg-[#251E34] h-9 w-9 flex items-center justify-center rounded-md hover:bg-[#BD7BFE] hover:text-black text-white mb-4 ${isActive ? "bg-[#BD7BFE] text-black" : ""}`}>
//           <i className="fa-solid fa-clapperboard"></i>
//         </NavLink>
//         <NavLink to="/tvshows" className={({ isActive }) =>`bg-[#251E34] h-9 w-9 flex items-center justify-center rounded-md hover:bg-[#BD7BFE] hover:text-black text-white mb-4 ${isActive ? "bg-[#BD7BFE] text-black" : ""}`}>
//           <i class="fa-solid fa-tv"></i>
//         </NavLink>
//         <NavLink to="/topshows" className={({ isActive }) =>`bg-[#251E34] h-9 w-9 flex items-center justify-center rounded-md hover:bg-[#BD7BFE] hover:text-black text-white mb-4 ${isActive ? "bg-[#BD7BFE] text-black" : ""}`}>
//           <i class="fa-solid fa-trophy"></i>
//         </NavLink>

//         <div className="flex " onMouseEnter={() => {setShowcomponent(true);}} onMouseLeave={() => {setShowcomponent(false);}}>
//           <div className="">
//             <NavLink className={`bg-[#251E34] h-9 w-9 flex items-center justify-center rounded-md hover:bg-[#BD7BFE] hover:text-black text-white mb-4 `}>
//               <i className="fa-solid fa-palette"></i>
//             </NavLink>
//           </div>

//           {showcomponent && (
//             <div className="absolute   z-50 ml-10">
//               <Sidebargenre />
//             </div>)}
//         </div>

//         <div  className="flex "  onMouseEnter={() => { setShowPopup(true);}} onMouseLeave={() => {setShowPopup(false);}}>
//           <div>
//             <NavLink className={`bg-[#251E34] h-9 w-9 flex items-center justify-center rounded-md hover:bg-[#BD7BFE] hover:text-black text-white mb-4 `}>
//               <i class="fa-solid fa-calendar-days"></i>
//             </NavLink>
//           </div>
//           {showPopup && (
//             <div className="absolute   z-50 ml-10">
//               <Sidebargenre />
//             </div>)}
//         </div>

//         <div className="flex " onMouseEnter={() => {setShowcomponent1(true);}} onMouseLeave={() => {setShowcomponent1(false);}}>
//           <div>
//             <NavLink className={`bg-[#251E34] h-9 w-9 flex items-center justify-center rounded-md hover:bg-[#BD7BFE] hover:text-black text-white mb-4 `}>
//               <i class="fa-solid fa-earth-asia"></i>
//             </NavLink>
//           </div>
//           {showcomponent1 && (
//             <div className="absolute   z-50 ml-10">
//               <Sidebargenre />
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Sidebar;

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSidebar } from "../context/SidebarContext";
import Sidebargenre from "./Sidebargenre";

function Sidebar() {
  const { isExpanded } = useSidebar();
  const [showcomponent, setShowcomponent] = useState(false);
  const [showcomponent1, setShowcomponent1] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div className={`bg-[#0F0F17] min-h-screen p-4 pt-6 flex-col transition-all duration-400 ease-out overflow-visible relative z-40 ${
        isExpanded ? 'w-64' : 'w-15'
      }`} style={{ willChange: 'width' }}>
        
        {/* Home */}
        <NavLink 
          to="/home" 
          className={({ isActive }) =>
            `${isExpanded ? 'flex items-center gap-3 px-3 py-2' : 'h-9 w-9 flex items-center justify-center'} bg-[#251E34] rounded-md hover:bg-[#BD7BFE] hover:text-black text-white mb-4 transition-all duration-400 ease-out ${
              isActive ? "bg-[#BD7BFE] text-black" : ""
            }`
          }
        >
          <i className="fa-regular fa-house"></i>
          {isExpanded && (
            <span 
              className="whitespace-nowrap"
              style={{
                transform: isExpanded ? 'scale(1)' : 'scale(0.8)',
                opacity: isExpanded ? 1 : 0,
                transition: 'all 400ms ease-out',
                transformOrigin: 'left center'
              }}
            >
              Home
            </span>
          )}
        </NavLink>

        {/* Movies */}
        <NavLink 
          to="/movies" 
          className={({ isActive }) =>
            `${isExpanded ? 'flex items-center gap-3 px-3 py-2' : 'h-9 w-9 flex items-center justify-center'} bg-[#251E34] rounded-md hover:bg-[#BD7BFE] hover:text-black text-white mb-4 transition-all duration-400 ease-out ${
              isActive ? "bg-[#BD7BFE] text-black" : ""
            }`
          }
        >
          <i className="fa-solid fa-clapperboard"></i>
          {isExpanded && (
            <span 
              className="whitespace-nowrap"
              style={{
                transform: isExpanded ? 'scale(1)' : 'scale(0.8)',
                opacity: isExpanded ? 1 : 0,
                transition: 'all 400ms ease-out',
                transformOrigin: 'left center'
              }}
            >
              Movies
            </span>
          )}
        </NavLink>

        {/* TV Shows */}
        <NavLink 
          to="/tvshows" 
          className={({ isActive }) =>
            `${isExpanded ? 'flex items-center gap-3 px-3 py-2' : 'h-9 w-9 flex items-center justify-center'} bg-[#251E34] rounded-md hover:bg-[#BD7BFE] hover:text-black text-white mb-4 transition-all duration-400 ease-out ${
              isActive ? "bg-[#BD7BFE] text-black" : ""
            }`
          }
        >
          <i className="fa-solid fa-tv"></i>
          {isExpanded && (
            <span 
              className="whitespace-nowrap"
              style={{
                transform: isExpanded ? 'scale(1)' : 'scale(0.8)',
                opacity: isExpanded ? 1 : 0,
                transition: 'all 400ms ease-out',
                transformOrigin: 'left center'
              }}
            >
              TV Shows
            </span>
          )}
        </NavLink>

        {/* Top Shows */}
        <NavLink 
          to="/topshows" 
          className={({ isActive }) =>
            `${isExpanded ? 'flex items-center gap-3 px-3 py-2' : 'h-9 w-9 flex items-center justify-center'} bg-[#251E34] rounded-md hover:bg-[#BD7BFE] hover:text-black text-white mb-4 transition-all duration-400 ease-out ${
              isActive ? "bg-[#BD7BFE] text-black" : ""
            }`
          }
        >
          <i className="fa-solid fa-trophy"></i>
          {isExpanded && (
            <span 
              className="whitespace-nowrap"
              style={{
                transform: isExpanded ? 'scale(1)' : 'scale(0.8)',
                opacity: isExpanded ? 1 : 0,
                transition: 'all 400ms ease-out',
                transformOrigin: 'left center'
              }}
            >
              Top Shows
            </span>
          )}
        </NavLink>

        {/* Genres */}
        <div 
          className="relative mb-4" 
          onMouseEnter={() => setShowcomponent(true)} 
          onMouseLeave={() => setShowcomponent(false)}
        >
          <div className={`${isExpanded ? 'flex items-center gap-3 px-3 py-2' : 'h-9 w-9 flex items-center justify-center'} bg-[#251E34] rounded-md hover:bg-[#BD7BFE] hover:text-black text-white transition-all duration-400 ease-out cursor-pointer`}>
            <i className="fa-solid fa-palette"></i>
            {isExpanded && (
              <span 
                className="whitespace-nowrap"
                style={{
                  transform: isExpanded ? 'scale(1)' : 'scale(0.8)',
                  opacity: isExpanded ? 1 : 0,
                  transition: 'all 400ms ease-out',
                  transformOrigin: 'left center'
                }}
              >
                Genres
              </span>
            )}
          </div>
          {showcomponent && (
            <div className={`absolute z-50 ${isExpanded ? 'left-full top-0 ml-2' : 'ml-10'}`}>
              <Sidebargenre />
            </div>
          )}
        </div>

        {/* Calendar */}
        <div 
          className="relative mb-4" 
          onMouseEnter={() => setShowPopup(true)} 
          onMouseLeave={() => setShowPopup(false)}
        >
          <div className={`${isExpanded ? 'flex items-center gap-3 px-3 py-2' : 'h-9 w-9 flex items-center justify-center'} bg-[#251E34] rounded-md hover:bg-[#BD7BFE] hover:text-black text-white transition-all duration-400 ease-out cursor-pointer`}>
            <i className="fa-solid fa-calendar-days"></i>
            {isExpanded && (
              <span 
                className="whitespace-nowrap"
                style={{
                  transform: isExpanded ? 'scale(1)' : 'scale(0.8)',
                  opacity: isExpanded ? 1 : 0,
                  transition: 'all 400ms ease-out',
                  transformOrigin: 'left center'
                }}
              >
                Calendar
              </span>
            )}
          </div>
          {showPopup && (
            <div className={`absolute z-[9999] ${isExpanded ? 'left-full top-0 ml-2' : 'ml-10'}`}>
              <Sidebargenre />
            </div>
          )}
        </div>

        {/* Countries */}
        <div 
          className="relative mb-4" 
          onMouseEnter={() => setShowcomponent1(true)} 
          onMouseLeave={() => setShowcomponent1(false)}
        >
          <div className={`${isExpanded ? 'flex items-center gap-3 px-3 py-2' : 'h-9 w-9 flex items-center justify-center'} bg-[#251E34] rounded-md hover:bg-[#BD7BFE] hover:text-black text-white transition-all duration-400 ease-out cursor-pointer`}>
            <i className="fa-solid fa-earth-asia"></i>
            {isExpanded && (
              <span 
                className="whitespace-nowrap"
                style={{
                  transform: isExpanded ? 'scale(1)' : 'scale(0.8)',
                  opacity: isExpanded ? 1 : 0,
                  transition: 'all 400ms ease-out',
                  transformOrigin: 'left center'
                }}
              >
                Countries
              </span>
            )}
          </div>
          {showcomponent1 && (
            <div className={`absolute z-[9999] ${isExpanded ? 'left-full top-0 ml-2' : 'ml-10'}`}>
              <Sidebargenre />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Sidebar;