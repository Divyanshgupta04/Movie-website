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
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const { searchtext, setSearchtext, handlesearch } = useContext(MovieContext);
  const { toggleSidebar } = useSidebar(); // Get the toggle function
  const navigate = useNavigate();

  return (
    <div
      className="h-15 flex items-center gap-70 "
      style={{ backgroundColor: "#251E34" }}
    >
      <div className="flex items-center gap-3 ml-3">
        <h1 
          className="h-8 w-8 border flex items-center justify-center rounded-md bg-[#14121F] cursor-pointer hover:bg-[#BD7BFE] hover:text-black transition-colors duration-200"
          onClick={toggleSidebar} // Add click handler
        >
          <i className="fa-solid fa-bars-staggered text-white"></i>
        </h1>
        <Link to='/home'><h1>
          <i className="fa-solid fa-video text-3xl text-[#9B92FE]"></i>
        </h1></Link>
      </div>
      <div style={{ backgroundColor: "#14121F" }} className="rounded-md">
        <i className="fa-solid fa-magnifying-glass text-white ml-2"></i>{" "}
        <input
          className=" text-white w-130 "
          style={{outline:"none"}}
          placeholder="Search"
          onChange={(e) => {
            setSearchtext(e.target.value);
          }}
          value={searchtext}
        />
        <button
          className="text-white text-sm font-thin m-1 bg-[#251F35] px-2 py-1 hover:bg-[#3a3153ff] rounded-md"
          onClick={() => {
            if(searchtext.trim() !== "")  {
            handlesearch(searchtext)
            navigate("/searchpage")}
          }}
        >
          <i className="fa-solid fa-droplet text-sm font-thin"></i>Filter
        </button>
      </div>
    </div>
  );
}

export default Navbar;