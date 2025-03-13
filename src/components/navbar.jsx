import { useEffect, useState } from "react";
import { navigate } from "./helper";
import HomePage from "./HomePage";
import MoviesPage from "./MoviesPage";

export default function Navbar({setPage}){
         return(
        <div className="flex gap-[80px] justify-between p-[16px] items-center bg-[#161D2F] hover:text-white">
            <a href=""> <img src="./redicon.svg" alt="" /></a>
            
            <div className="flex gap-[24px]">
                 <button onClick={()=> navigate("/homepage", setPage)} className="cursor-pointer"><img src="./homepage-icon.svg" alt="" /></button>
                 <button onClick={()=> navigate("/movies", setPage)} className="cursor-pointer"><img src="./movie-icon.svg" alt="" /></button>
                 <button onClick={()=> navigate("/series", setPage)} className="cursor-pointer"> <img src="./series-icon.svg" alt="" /></button>
                 <button onClick={()=> navigate("/bookmark", setPage)} className="cursor-pointer"><img src="./bookmark-icon.svg" alt="" /></button>
            
            </div>

            <a href=""><img src="./men-icon.svg" alt="" /></a>
        </div>

    );
    

}


