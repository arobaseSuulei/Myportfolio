import {useEffect, useState} from "react";



export default function ProjectPortfolio() {

    return (



        <div className={'border  rounded-lg grid grid-cols-1 grid-rows-2  '}>
            {/*video*/}
            <a target={'_blank'} href={'https://chatgo-realtime.vercel.app/'}>
                <video
                    className=" rounded-lg shadow-lg w-full h-full"
                    autoPlay
                    muted
                    loop
                    src="https://pxyqknxfvimxdcmplbff.supabase.co/storage/v1/object/public/items//portfolio.mp4">
                    Votre navigateur ne supporte pas la balise vidéo.
                </video>
            </a>


            {/*info*/}

            <nav className={'flex flex-col gap-2 py-2 px-2'}>
                <h1 className={'font-semibold '}>Portfolio</h1>
                <p className={' text-xs'}>Décembre 2024</p>
                <p className={'opacity-60 text-xs'}>Projet de portfolio web qui présente mes projets et mes liens</p>

                <p className={'flex flex-wrap gap-2'}>
                    <a className={'cursor-pointer hover:opacity-60  rounded-lg p-1 text-xs bg-zinc-700 text-white'}>React
                        js</a>
                    <a className={'cursor-pointer hover:opacity-60 rounded-lg p-1 text-xs bg-zinc-700 text-white'}>Tailwind
                        css</a>
                    <a className={'cursor-pointer hover:opacity-60 rounded-lg p-1 text-xs bg-zinc-700 text-white'}>Framer Motion</a>


                </p>

                <p>
                    <a target={'_blank'} href={'https://github.com/arobaseSuulei/Myportfolio/'}
                       className={'cursor-pointer hover:opacity-60 rounded-lg p-1 text-xs bg-white text-black'}>code
                        source</a>
                    <a href={'https://souleyd-portfolio.vercel.app'}
                       className={'ml-4 cursor-pointer hover:opacity-60 rounded-lg p-1 text-xs bg-white text-black'}>visitez</a>

                </p>

            </nav>
        </div>



    );
}