import {useEffect, useState} from "react";

import ProjectPortfolio from "./ProjectPortfolio.jsx";
import ScrollRevealItem from "./ScrollRevealItem.jsx";
import ProjectFood from "./ProjectFood.jsx";
import screenPortfolio from "../assets/Souleymane - Portfolio.jpeg"
import screenFood from "../assets/foodQ.jpeg"
import screenChatgo from "../assets/Clip2.mp4"

import airbnb from "../assets/airbnbAI.mp4"
import appleTV from "../assets/appleTV.mp4"

import lunar from "../assets/lunar.mp4"

import edgeVision from "../assets/edge-vision.jpeg"


export default function Projects() {


    const project=[

        {
            id:6,
            name:"Edge Vision Model",
            pin:"TinyML",
            image:true,
            imageUrl:edgeVision,
            url:"https://github.com/arobaseSuulei/edge-vision-model/tree/main",
            github:"https://github.com/arobaseSuulei/edge-vision-model",
            description:"Edge Vision Model is an end-to-end embedded computer vision project: a CNN trained on a custom image dataset (1260+ images) collected with an OV2640 / ESP32-CAM, designed to be optimized, quantized and deployed on a microcontroller (ESP32-S3) using TensorFlow Lite Micro for real-time image classification under strict memory and power constraints."
        },
        
        {
            id:1,
            name:"Lunar Lander Rocket",
            pin:"RL",
            url:"https://huggingface.co/suuley/ppo-LunarLander-v2",
            github:"https://huggingface.co/suuley/ppo-LunarLander-v2",
            image:false,
            imageUrl:lunar,
            description:"How to train a rocket to land on the Moon? Using reinforcement learning, you can train an agent to control a rocket and land it on the Moon by learning from actions and rewards. We trained the agent across 16 environments on a GPU, and we let it learn through trial and error "

        },
        {
            id:2,
            name:"ChatGO",
            pin:"demo",
            url:"https://chatgo-realtime.vercel.app/",
            github:"https://github.com/arobaseSuulei/chatGO",
            image:false,
            imageUrl:screenChatgo,
            description:"ChatGO is a real-time messaging app built for who want to communicate in a forum (  Working On... please wait me and supports me ;)"

        },
        {
            id:5,
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
            github:"https://github.com/arobaseSuulei/AppleTV-recommandation-algo",
            image: false,
            imageUrl:appleTV,
            description:" A simple recommendation system for Apple TV+ shows using K-means clustering. Shows are grouped into clusters based on metadata (genre, country, age rating), and recommendations are made by suggesting other shows from the same cluster when one is selected."

        },

        


    ];


    return(
        <div className={'flex flex-col gap-16 md:gap-24'}>

            <h1 className={'font-semibold flex items-center justify-center text-sm'}>
                <p className={'font-semibold text-xl sm:text-2xl text-white p-2 rounded-lg'}>Highlighted
                    work</p>
            </h1>

            {project.map((item, index) => (
                <div key={item.id}>


                    <ScrollRevealItem>
                        <div className={'grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center'}>


                            <div className={'border-[0.2px] border-white/10 bg-[#1c1c1c]/30 backdrop-blur-sm rounded-2xl max-w-full min-w-0 p-4 sm:p-6'}>

                                {/*info*/}

                                <nav className={'flex flex-col py-4 px-2'}>

                                    <p className={'flex flex-col sm:py-4 px-2 py-2 gap-2'}>
                                        <span className={'flex w-full justify-between items-center'}>


                                            <h1 className={'flex items-center gap-2'}>
                                                <a className={'font-semibold text-lg sm:text-2xl'}>{item.name}</a>
                                                <span className={'text-xs border border-white/20 rounded-full px-4 py-1'}>
                                                    {item.pin}
                                                </span>


                                            </h1>
                                            <a target={'_blank'} href={item.url}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                     viewBox="0 0 24 24"
                                                     strokeWidth="1.5" stroke="currentColor"
                                                     className="sm:size-12 size-8 rounded-full p-2 bg-white/5 hover:bg-white/10 transition">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"/>
                                                </svg>
                                            </a>
                                        </span>


                                    </p>


                                </nav>
                                {/*Video*/}
                                <a target={'_blank'} href={item.url}>


                                    {item.image ?
                                        <img className={"rounded-lg w-full"} src={item.imageUrl}/>
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

                                {/* Description and buttons visible on mobile only */}
                                <div className="md:hidden mt-6 flex flex-col gap-4">
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                    <div className="flex gap-3 text-xs font-semibold">
                                        <a href={item.github} target="_blank" className="flex gap-2 items-center rounded-full px-4 py-2 bg-white text-black transition hover:bg-white/90">
                                            <span>Read more</span>
                                            <img className="w-3.5 h-3.5" src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="GitHub"/>
                                        </a>
                                        <a href={item.url} target="_blank" className="flex gap-2 items-center rounded-full border border-white/20 px-4 py-2 text-white transition hover:bg-white/10">
                                            <span>Link URL</span>
                                        </a>
                                    </div>
                                </div>


                            </div>

                            <div className="hidden md:flex flex-col gap-8 items-start justify-center text-left">
                               <p className="text-gray-300 leading-relaxed text-base">
                                   {item.description}
                               </p>

                               <span className="flex gap-4">
                                    <a href={item.github} target="_blank" className="flex gap-2 items-center rounded-full px-4 py-2 bg-white text-black transition hover:bg-white/90 font-semibold text-sm">
                                        <p>Read more</p>
                                        <img className="w-4 h-4" src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"/>
                                    </a>

                                    <a href={item.url} target="_blank" className="flex gap-2 items-center rounded-full border border-white/20 px-4 py-2 text-sm font-semibold hover:bg-white/10 transition">
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
