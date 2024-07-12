import React from "react";
import { Link } from "react-router-dom";
function Header(pros)
{
    return(        
         <header className="container    mx-auto flex flex-row
           shadow-2xl justify-between items-center ">
                <h1 class= "font-bold text-2xl text-cyan-300 ">
                    FLAGERY
                </h1>
                
         </header>
        

        );
}
export default Header;
