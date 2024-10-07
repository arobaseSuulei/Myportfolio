import React from 'react';
import {useEffect,useState} from "react";
import {Link} from "react-router-dom";


export default function Projects() {
    return(
        <div>
            <div className={'mt-12 flex flex-col gap-6  '}>
                <h1>Projects</h1>

                <div className={'grid grid-cols-2 gap-2 '}>


                    <a target={'_blank'} href={'https://donelist-todo.vercel.app'}
                       className={'border w-72 h-80 flex flex-col gap-2 p-4 '}>
                        <a className={'flex justify-between'}>
                            <p>To do app</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"/>
                            </svg>


                        </a>
                        <p className={'flex items-center w-64 h-64 p-4 justify-center'}>
                            <img
                                className={' object-cover rounded-lg '}
                                src={'../public/todoapp.png'}
                                alt="To do app"
                            />
                        </p>

                        <p className={'flex items-center justify-center gap-4'}>
                            <img src={'../public/react.svg'} className={'w-6 h-6'} alt="Treact logo"/>
                            <img src={'../public/tailwind.svg'} className={'w-6 h-6'} alt="tailwind logo"/>
                        </p>


                    </a>


                    <Link to={'/'}>
                        <a target={'_blank'} href={''}
                           className={'border w-72 h-80 flex flex-col gap-2 p-4 '}>
                            <a className={'flex justify-between'}>
                                <p>Portfolio</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5"
                                     stroke="currentColor" className="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"/>
                                </svg>


                            </a>
                            <p className={'flex items-center w-64 h-64 p-4 justify-center'}>
                                <img
                                    className={' object-cover rounded-lg '}
                                    src={'../public/portfolio.png'}
                                    alt="portfolio"
                                />
                            </p>


                            <p className={'flex items-center justify-center gap-4'}>
                                <img src={'../public/react.svg'} className={'w-6 h-6'} alt="Treact logo"/>
                                <img src={'../public/tailwind.svg'} className={'w-6 h-6'} alt="tailwind logo"/>
                            </p>


                        </a>
                    </Link>


                </div>

            </div>
        </div>
    );
}