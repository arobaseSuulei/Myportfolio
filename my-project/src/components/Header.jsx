import React from 'react';
import {useState, useEffect} from 'react'

import '../App.css'
import {Avatar, Badge, Box,Text, Card, Em, Flex} from "@radix-ui/themes";



export default function Header() {
    return(
        <div className={'relative flex flex-col gap-8 mt-28 sm:mt-36'}>
            {/* Ambient background glow */}
            

            {/* Availability Badge */}
            <div className="flex items-center gap-2 self-start px-3 py-1 rounded-full border border-[#E8A44A]/40 bg-[#E8A44A]/5 backdrop-blur-sm text-xs text-[#EFECE7] font-medium">
                
                open source and local AI
            </div>

            <div className="flex flex-col gap-6">
                <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
                    Hey, I am <a class='text-[#E8A44A]'>Souleymane</a>
                </h1>
                
                <p className="text-lg sm:text-2xl text-gray-300 font-normal leading-relaxed max-w-3xl">
                    passionate about <strong>AI</strong> and <strong>Local Models</strong>. 
                    I am building the future of AI w/ open source and local AI
                </p>
            </div>

            <div className="flex items-center gap-4 mt-2">
                <a href="mailto:slimanediallo2105@gmail.com"
                    className="group relative flex items-center justify-center gap-2 bg-[#E8A44A] text-black font-semibold text-sm rounded-full py-3.5 px-6 shadow-lg shadow-[#E8A44A]/20 hover:shadow-[#E8A44A]/30 transition-all duration-300 hover:scale-105 active:scale-95">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                         stroke="currentColor" className="w-4 h-4 transition-transform group-hover:translate-x-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/>
                    </svg>
                    <span>Send an email</span>
                </a>

                <a target="_blank"
                   rel="noopener noreferrer"
                   href="https://drive.google.com/file/d/19Pyj8BpEHtjhVSE-1aH2jKxUOq0sxwQm/view?usp=sharing"
                   className="flex items-center justify-center gap-2 border border-[#E8A44A] text-[#E8A44A] font-semibold text-sm rounded-full py-3.5 px-6 hover:bg-[#E8A44A]/10 transition-all duration-300 hover:scale-105 active:scale-95">
                    <span>CV</span>
                </a>
            </div>
        </div>
    );
}