import React from 'react';
import {useState, useEffect} from 'react'

import '../App.css'
import {Avatar, Badge, Box,Text, Card, Em, Flex} from "@radix-ui/themes";



export default function Header() {
    return(
        <div className={'sm:px-52 flex flex-col gap-8 mt-36 sm:mt-40'}>

            <div>

                


                <h1 className={' text-xl sm:text-2xl'}>
                   Hey <a className={''}>souleymane</a> here, Software Engineering student, passionate about building impactful technology. I believe in using software to solve real-world challenges.
                </h1>




            </div>

            <div className={'flex items-center  gap-4 '}>
                <div
                    className={'flex items-center   gap-4  '}>


                    <a href={'mailto:slimanediallo2105@gmail.com'}
                       className={'shadow-[0_0_15px_rgba(255,255,255)] flex items-center w-36 text-xs bg-white text-black gap-1 border rounded-full p-4'}>


                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/>
                        </svg>

                        <p className={'font-semibold '}> Send an email</p>




                    </a>


                    <a target={'_blank'}
                       href={'https://drive.google.com/file/d/1cpZ7nD-6bBiWzF89Fe8039bI6HpraMiT/view?usp=sharing'}
                       className={'flex items-center gap-2 border rounded-full w-24 text-xs hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(255,255,255)] transition ease-out p-4 px-6'}>
                        <p>
                            CV
                        </p>


                    </a>


                </div>
            </div>


        </div>
    );
}