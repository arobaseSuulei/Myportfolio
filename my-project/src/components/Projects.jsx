import {useEffect, useState} from "react";

import ProjectPortfolio from "./ProjectPortfolio.jsx";
import ScrollRevealItem from "./ScrollRevealItem.jsx";
import ProjectFood from "./ProjectFood.jsx";
import screenPortfolio from "../assets/Souleymane - Portfolio.jpeg"
import screenFood from "../assets/foodQ.jpeg"
import screenChatgo from "../assets/Clip2.mp4"

import classnotes from "../assets/classnote.png"
import airbnb from "../assets/airbnbAI.mp4"
import appleTV from "../assets/appleTV.mp4"


export default function Projects() {


    const project=[
        {
            id:1,
            name:"ChatGO",
            pin:"demo",
            url:"https://chatgo-realtime.vercel.app/",
            github:"https://github.com/arobaseSuulei/airbnb-ai",
            image:false,
            imageUrl:screenChatgo,
            description:"ChatGO is a real-time messaging app built with React, tailwind, python working with ML model and Supabase/supabase-realtime.\n" +
                "                            It allows users to send and receive messages seamlessly, analyzing the messages before sending with ML tools transformers \n" +
                "                            I also used railway for the deployement of the script python"

        },
        {
            id:2,
            name:"airbnb Intelligence",
            pin:"working on",
            url:"https://github.com/arobaseSuulei/airbnb-ai",
            github:"https://github.com/arobaseSuulei/airbnb-ai",
            image: false,
            imageUrl:airbnb,
            description:"Airbnb Intelligence is a voice-based booking app that lets users reserve an Airbnb just by talking to an AI.\n" +
                "I built it using React for the frontend, Python for the backend, Grok’s LLM API for natural language understanding, and Supabase for authentication and database management.\n" +
                "The AI handles user conversations, understands booking needs, and interacts with the database to suggest and confirm available listings.\n" +
                "This project combines conversational AI with real-world application logic, creating a smooth and futuristic booking experience."
        },
        {
            id:3,
            name:"Apple TV+ Recommandation algorithm",
            pin:"kmeans",
            url:"https://apple-tv-recommandation.vercel.app/",
            github:"https://github.com/arobaseSuulei/airbnb-ai",
            image: false,
            imageUrl:appleTV,
            description:" A simple recommendation system for Apple TV+ shows using K-means clustering. Shows are grouped into clusters based on metadata (genre, country, age rating), and recommendations are made by suggesting other shows from the same cluster when one is selected."

        },

        {
            id:4,
            name:"ClassNotes Ai ",
            pin:"gdg finalist",
            image:true,
            imageUrl:classnotes,
            url:"https://pixelblue-hackaton.vercel.app/",
            github:"https://github.com/arobaseSuulei/classnotes-ai",
            description:"ClassNotes Ai is an ai app for helping to take notes efficiently in class"
        }

    ];




    return(
        <div className={'flex flex-col  sm:p-4 gap-8'}>

            <h1 className={'font-semibold flex items-center justify-center text-sm'}>
                <p className={'font-semibold text-xl sm:text-2xl text-white p-2 rounded-lg'}>Highlighted
                    work</p>
            </h1>

            {project.map((item, index) => (
                <div>


                    <ScrollRevealItem>
                        <div className={'grid grid-cols-1 sm:grid-cols-2  gap-2'}>


                            <div className={'border-[0.2px] border-gray-300 rounded-lg max-w-full min-w-0  p-4 '}>

                                {/*info*/}

                                <nav className={'flex flex-col py-12 px-2'}>

                                    <p className={'flex flex-col sm:py-6 sm:px-2 px-2 py-2 gap-2'}>
                                        <a className={'flex items-center gap-1 sm:text-2xl font-semibold'}>


                                            <p className={'flex w-full justify-between items-center'}>


                                                <h1 className={'flex items-center gap-2 sm:gap-2'}>
                                                    <a className={'font-semibold text-lg sm:text-2xl'}>{item.name}</a>
                                                    <p className={'text-xs border rounded-full px-4 py-1'}>
                                                        <a>{item.pin}</a>
                                                    </p>


                                                </h1>
                                                <a target={'_blank'} href={item.url}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                         viewBox="0 0 24 24"
                                                         stroke-width="1.5" stroke="currentColor"
                                                         className="sm:size-12 size-8 rounded-full p-2">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"/>
                                                    </svg>
                                                </a>
                                            </p>
                                        </a>


                                    </p>


                                    <p className="sm:hidden">
                                        {item.description}

                                    </p>


                                </nav>
                                {/*Video*/}
                                <a target={'_blank'} href={item.url}>


                                    {item.image ?
                                        <img className={"rounded-lg"} src={item.imageUrl}/>
                                        : <video
                                            className={" object-cover aspect-video rounded-lg shadow-lg w-full"}
                                            autoPlay
                                            muted
                                            loop
                                            src={item.imageUrl}>
                                            Votre navigateur ne supporte pas la balise vidéo.
                                        </video>
                                    }

                                </a>


                            </div>

                            <div className="hidden px-12 sm:flex flex-col gap-12 items-center justify-center">
                               {item.description}

                               <span className="flex gap-4">
                                    <a href={item.github} target="_blank" className="flex gap-2 items-center rounded-full  px-3 py-1 bg-white text-black">
                                        <p>Read more</p>
                                        <img className="w-4 h-4" src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"/>
                                    </a>

                                    <a href={item.url} target="_blank" className="flex gap-2 items-center rounded-full border px-3 py-1  ">
                                        <p>Link URL</p>

                                    </a>
                                    
                    
                               </span>
                        
                            </div>


                        </div>
                    </ScrollRevealItem>
                </div>
            ))}


        </div>
    );
}