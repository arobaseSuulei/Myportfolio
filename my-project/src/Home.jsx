import React from "react";
import { Link } from "react-router-dom";
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
import { Badge, Flex, Theme } from "@radix-ui/themes";
import Name from "./components/Academic.jsx";
import ScrollRevealItem from "./components/ScrollRevealItem.jsx";
import Academic from "./components/Academic.jsx";

export default function Home() {
    return (
        <Theme appearance={"dark"}>
            <Navbar />
            <div className={" min-h-screen"}>

                <ScrollRevealItem delay={0.2}>
                    <div>
                        <Header />
                    </div>
                </ScrollRevealItem>


                <ScrollRevealItem delay={0.4}>
                    <div>
                        <Skills />
                    </div>
                </ScrollRevealItem>



                    <div>
                        <Projects />
                    </div>






                <ScrollRevealItem delay={0.2}>
                    <div>
                        <Nav />
                    </div>
                </ScrollRevealItem>


                <ScrollRevealItem >
                    <div>
                        <Footer />
                    </div>
                </ScrollRevealItem>
            </div>
        </Theme>
    );
}