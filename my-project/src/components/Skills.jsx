import React from 'react';
import {useEffect,useState} from "react";
import {Link} from "react-router-dom";
import typescriptLogo from "../assets/typescript.png"

import reactLogo from "../assets/atom.png"
import figmaLogo from "../assets/figma.png"
import postgreLogo from "../assets/postgre.png"
import pythonLogo from "../assets/python.png"
import phpLogo from "../assets/php.png"
import tailwindLogo from "../assets/icons8-tailwind-css-384.png"
import huggingFace from "../assets/huggingFace.png"
import javaLogo from "../assets/java-coffee-cup-logo.png"





export default function Skills() {



    const stack=[
        {
            id:1,
            name:"hugging face",
            url:huggingFace,
        },
        {
            id:2,
            name:"ReactJS",
            url:reactLogo,
        },
        {
            id:3,
            name:"Figma",
            url:figmaLogo,
        },
        {
            id:4,
            name:"SQL",
            url:postgreLogo,
        },
        {
            id:5,
            name:"Kotlin",
            url:phpLogo,
        },
        {
            id:6,
            name:"Tailwind CSS",
            url:tailwindLogo,
        },
        {
            id:7,
            name:"python",
            url:pythonLogo,
        },
        {
            id:8,
            name:"Java",
            url:javaLogo,
        }

    ];
    return(
        <div className={'flex flex-col items-center justify-center gap-4 p-4'}>
            <h1 id={"work"} className={'mt-6 font-semibold text-xl'}>work stack</h1>


            <div className={'grid grid-cols-2 sm:grid-cols-4 gap-4'}>





                    {stack.map((item,index) => (
                        <div className={"flex  gap-2 items-center py-4 px-5 border-[0.2px] border-gray-500 text-sm font-semibold p-2 rounded-full"} key={item.id}>
                            <a>
                                <img src={item.url} className={'w-8'}/>
                            </a>
                            <a>{item.name}</a>
                        </div>
                    ))}














            </div>

        </div>
    );
}