import {useEffect, useState} from "react";
import ProjectTodo from "./ProjectTodo.jsx";
import ProjectPortfolio from "./ProjectPortfolio.jsx";
import ScrollRevealItem from "./ScrollRevealItem.jsx";
import ProjectFood from "./ProjectFood.jsx";


export default function Projects() {
    return(
        <div className={'flex flex-col p-4 gap-8'}>
            <h1 className={'font-semibold flex items-center justify-center text-sm'}>
                <p className={'bg-black text-white p-2 rounded-lg'}>Mes projets</p>
            </h1>

            <h1 className={'flex items-center font-semibold sm:text-4xl text-2xl justify-center'}>
                Découvrir mes projets
            </h1>

            <p className={'opacity-60 text-sm px-4 sm:px-24 text-center '}>
                Au cours de ma formation, je consacre du temps à des projets me permettant ainsi de gagner en expertise et d' approfondir mes connaissances
            </p>


            <div className={' p-6 grid grid-cols-1  sm:grid-cols-2 gap-2'}>


                <div className={'border rounded-lg grid grid-cols-1 grid-rows-2   '}>
                    {/*Video*/}
                    <a target={'_blank'} href={'https://chatgo-realtime.vercel.app/'}>
                        <video
                            className=" rounded-lg shadow-lg w-full h-full"
                            autoPlay
                            muted
                            loop
                            src="https://pxyqknxfvimxdcmplbff.supabase.co/storage/v1/object/public/items/chatGo.mov">
                            Votre navigateur ne supporte pas la balise vidéo.
                        </video>
                    </a>


                    {/*info*/}

                    <nav className={'flex flex-col gap-2 py-2 px-2'}>
                        <h1 className={'font-semibold '}>chatGO</h1>
                        <p className={' text-xs'}>Novembre 2024</p>
                        <p className={'opacity-60 text-xs'}>Application web de chat en temps réel ouvert à tous</p>

                        <p className={'flex flex-wrap gap-2'}>
                            <a className={'cursor-pointer hover:opacity-60  rounded-lg p-1 text-xs bg-zinc-700 text-white'}>React
                                js</a>
                            <a className={'cursor-pointer hover:opacity-60 rounded-lg p-1 text-xs bg-zinc-700 text-white'}>Tailwind
                                css</a>
                            <a className={'cursor-pointer hover:opacity-60 rounded-lg p-1 text-xs bg-zinc-700 text-white'}>Supabase</a>

                        </p>

                        <p>
                            <a target={'_blank'} href={'https://github.com/arobaseSuulei/chatGO/'}
                               className={'cursor-pointer hover:opacity-60 rounded-lg p-1 text-xs bg-white text-black'}>code
                                source</a>
                            <a href={'https://chatgo-realtime.vercel.app/'}
                               className={'ml-4 cursor-pointer hover:opacity-60 rounded-lg p-1 text-xs bg-white text-black'}>visitez</a>

                        </p>

                    </nav>
                </div>


                <ScrollRevealItem delay={0.5}>
                    <div>
                        <ProjectTodo/>
                    </div>
                </ScrollRevealItem>

                <ScrollRevealItem delay={0.6}>
                <div>
                        <ProjectPortfolio/>
                    </div>
                </ScrollRevealItem>


                <ScrollRevealItem delay={0.8}>
                    <div>
                        <ProjectFood/>
                    </div>
                </ScrollRevealItem>


            </div>


        </div>
    );
}