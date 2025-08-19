import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Sidebar() {
  const[showcomponent,setShowcomponent]=useState(false)
   const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <div className="w-15 bg-[#0F0F17] h- p-4 pt-6 flex-col ">
        <NavLink 
          to="/home"
          className={({ isActive }) =>
            `bg-[#251E34] h-9 w-9 flex items-center justify-center rounded-md hover:bg-[#BD7BFE] hover:text-black text-white mb-4 ${
              isActive ? " bg-[#BD7BFE] text-black" : ""
            }`
          }
        >
          <i className="fa-regular fa-house   "></i>
        </NavLink> 
        <NavLink
          to="/df"
          className={({ isActive }) =>
            `bg-[#251E34] h-9 w-9 flex items-center justify-center rounded-md hover:bg-[#BD7BFE] hover:text-black text-white mb-4 ${
              isActive ? "bg-[#BD7BFE] text-black" : ""
            }`
          }
        >
          <i className="fa-solid fa-clapperboard"></i>
        </NavLink>
        <NavLink
          to="/df"
          className={({ isActive }) =>
            `bg-[#251E34] h-9 w-9 flex items-center justify-center rounded-md hover:bg-[#BD7BFE] hover:text-black text-white mb-4 ${
              isActive ? "bg-[#BD7BFE] text-black" : ""
            }`
          }
        >
          <i class="fa-solid fa-tv"></i>
        </NavLink>
        <NavLink
          to="/df"
          className={({ isActive }) =>
            `bg-[#251E34] h-9 w-9 flex items-center justify-center rounded-md hover:bg-[#BD7BFE] hover:text-black text-white mb-4 ${
              isActive ? "bg-[#BD7BFE] text-black" : ""
            }`
          }
        >
          <i class="fa-solid fa-trophy"></i>
        </NavLink>

        <NavLink
    to="/df"
    className={({ isActive }) =>
      `bg-[#251E34] h-9 w-9 flex items-center justify-center rounded-md 
       hover:bg-[#BD7BFE] hover:text-black text-white mb-4 
       ${isActive ? "bg-[#BD7BFE] text-black" : ""}`
    }
  >
    <i className="fa-solid fa-palette"></i>
  </NavLink>


        <NavLink
          to="/df"
          className={({ isActive }) =>
            `bg-[#251E34] h-9 w-9 flex items-center justify-center rounded-md hover:bg-[#BD7BFE] hover:text-black text-white mb-4 ${
              isActive ? "bg-[#BD7BFE] text-black" : ""
            }`
          }
        >
          <i class="fa-solid fa-calendar-days"></i>
        </NavLink>
        <NavLink
          to="/df"
          className={({ isActive }) =>
            `bg-[#251E34] h-9 w-9 flex items-center justify-center rounded-md hover:bg-[#BD7BFE] hover:text-black text-white mb-4 ${
              isActive ? "bg-[#BD7BFE] text-black" : ""
            }`
          }
        >
          <i class="fa-solid fa-earth-asia"></i>
        </NavLink>
      </div>
      
    </>
  );
}

export default Sidebar;
//<button className='bg-[#251E34] h-9 w-9 flex items-center justify-center rounded-md hover:bg-[#BD7BFE] hover:text-black text-white mb-4'><i className="fa-regular fa-house   "></i></button>


{/* <>
      <div className="w-15 bg-[#0F0F17] h- p-4 pt-6 flex-col ">
       <div
  className="relative flex"
  onMouseEnter={() => setShowcomponent(true)}
>
  <NavLink
    to="/df"
    className={({ isActive }) =>
      `bg-[#251E34] h-9 w-9 flex items-center justify-center rounded-md 
       hover:bg-[#BD7BFE] hover:text-black text-white mb-4 
       ${isActive ? "bg-[#BD7BFE] text-black" : ""}`
    }
  >
    <i className="fa-solid fa-palette"></i>
  </NavLink>

  {showcomponent && (
    <div className="absolute left-12 top-0 bg-red-200 z-50 h-10 w-10"
    onMouseEnter={()=>setShowcomponent(true)}
    >
      Hover Box
    </div>
  )}
</div>

    <div className="bg-yellow-500 z-50 border" >
      <div
          className="bg-red-500 flex"
          onMouseEnter={() => setShowPopup(true)}
          onMouseLeave={() => setShowPopup(false)}
          style={{ padding: '20px', border: '1px solid black' }}
        >
        
          {showPopup && (
            <div
            className="absolute p-10 bg-green-500 z-50 ml-7"
            >
              <div>

              </div>
              This is the popup content!
            </div>
          )}
        </div>
      </div>  
    </div>
    </>*/}