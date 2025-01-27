import React from 'react';
import {useEffect,useState} from "react";
import {Link} from "react-router-dom";


export default function Skills() {
    return(
        <div className={'flex flex-col gap-4 p-4'}>
            <h1 className={'font-semibold text-xl'}>Skills</h1>

            <nav className={'flex flex-wrap gap-2'}>
                <p className={'cursor-pointer hover:opacity-60 font-semibold rounded-lg p-1 text-xs bg-black text-white'}>React js</p>
                <p className={'cursor-pointer hover:opacity-60 font-semibold rounded-lg p-1 text-xs bg-white text-black'}>Tailwind css</p>
                <p className={'cursor-pointer hover:opacity-60 font-semibold rounded-lg p-1 text-xs bg-white text-black'}>Supabase</p>
                <p className={'cursor-pointer hover:opacity-60 font-semibold rounded-lg p-1 px-4 text-xs bg-white text-black'}>C</p>
                <p className={'cursor-pointer hover:opacity-60 font-semibold rounded-lg p-1 text-xs bg-white text-black'}>SQL</p>
                <p className={'cursor-pointer hover:opacity-60 font-semibold rounded-lg p-1 text-xs bg-white text-black'}>Javascript</p>
                <p className={'cursor-pointer hover:opacity-60 font-semibold rounded-lg p-1 px-4 text-xs bg-white text-black'}>C++</p>
                <p className={'cursor-pointer hover:opacity-60 font-semibold rounded-lg p-1 text-xs bg-white text-black'}>UML models</p>
                <p className={'cursor-pointer hover:opacity-60 font-semibold rounded-lg p-1 text-xs bg-white text-black'}>Php</p>
                <p className={'cursor-pointer hover:opacity-60 font-semibold rounded-lg p-1 text-xs bg-white text-black'}>Git</p>
                <p className={'cursor-pointer hover:opacity-60 font-semibold rounded-lg p-1 text-xs bg-white text-black'}>Figma</p>
                <p className={'cursor-pointer hover:opacity-60 font-semibold rounded-lg p-1 text-xs bg-white text-black'}>Linux bash</p>


            </nav>
        </div>
    );
}