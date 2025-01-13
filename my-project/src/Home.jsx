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
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Nav from "./components/Nav.jsx";
import "@radix-ui/themes/styles.css";
import {Badge, Flex, Theme} from "@radix-ui/themes";
import Name from "./components/Name.jsx";





export default function Home() {
    return(
        <Theme appearance={'dark'}>
            <div  className={'grid grid-cols-1 sm:mx-72 gap-4  min-h-screen  '}>
                <div
                    className={''}>
                    <Header/>
                </div>


                <div className={''}>
                    <Skills/>
                </div>
                <div className={''}>
                    <Projects/>
                </div>
                <div className={''}>
                    <Nav/>
                </div>
                <div className={''}>
                    <Footer/>
                </div>


            </div>

        </Theme>
    );
}