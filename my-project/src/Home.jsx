import React from "react";
import {Link} from "react-router-dom";
import Header from "./components/Header.jsx";
import Biography from "./components/Biography.jsx";
import Projects from "./components/Projects.jsx";




export default function Home() {
    return(
        <div  className={'  flex flex-col min-h-screen  max-w-screen-lg mx-72 py-12 px-14'}>




            <Header/>
            <Biography/>
            <Projects/>



        </div>
    );
}