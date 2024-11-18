import React from 'react';
import {useEffect,useState} from "react";
import {Link} from "react-router-dom";



export default function Nav() {
    return(
        <div className={' flex flex-col gap-6'}>

            <h1 className={'font-semibold flex items-center justify-center text-sm'}>
                <p className={'bg-white text-black p-2 rounded-lg'}>Mes réseaux sociaux</p>
            </h1>

            <nav className={'flex items-center justify-center text-xs gap-2 '}>




                <a href={'https://www.linkedin.com/in/souleymane-diallo-2b13a02b9/'} className={' p-2'}>
                    <img className={'w-8'}
                         src={'https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg'}/>
                </a>


                <a href={'https://github.com/arobaseSuulei'} className={' p-2'}>
                    <img className={'w-8 rounded-lg'}
                         src={'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png'}/>
                </a>

                <a href={'https://x.com/4ssulei'} className={' p-2'}>
                    <img className={'w-8 rounded-lg'}
                         src={'https://img.logo.dev/twitter.com?token=pk_QyZYYVI6QBejCt9wU_0qdw'}/>
                </a>




            </nav>

        </div>
    );
}