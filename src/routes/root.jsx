import React from "react";
import Header from "../components/header";
import { Outlet } from "react-router-dom";

function Root(props)
{
    return(        
         <>
         < Header/>
         <Outlet />
         <footer className="text-center mx-auto text-cyan-500">
         ©SOORAJKUMAR  
         </footer>
         </>
    );
}
export default Root;
