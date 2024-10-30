import React from "react";
import {Link} from "react-router-dom";
import Header from "./components/Header.jsx";
import Biography from "./components/Biography.jsx";
import Projects from "./components/Projects.jsx";
import Navbar from "./components/Navbar.jsx";
import Content from "./components/Content.jsx";
import Scrollbar from "./components/Scrollbar.jsx";
import ProjectSection from "./components/ProjectSection.jsx";
import Footer from "./components/Footer.jsx";




export default function Home() {
    return(
        <div style={{backgroundColor:'#121212'}}  className={'  flex flex-col min-h-screen  '}>
            <Navbar/>
            <Content/>
            <Scrollbar/>
            <ProjectSection/>
            <Footer/>



        </div>
    );
}