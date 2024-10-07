import React from 'react';
import {useState, useEffect} from 'react'



export default function Header() {
    return(
        <div>
            <div className={'flex justify-between items-center gap-4'}>

                <span className={'flex items-center flex-col gap-2'}>
                    <nav className={'flex items-center gap-2'}>
                        <img className={' w-14 h-auto'} src={'https://avatar.iran.liara.run/public/33'}/>
                        <p>Souley Diallo</p>

                    </nav>
                    <nav className={'flex items-center gap-2'}>
                        <span className="relative flex h-2 w-2">
                            <span
                                className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <p className={'text-xs'}>Looking for intership</p>
                    </nav>
                </span>

                <span className={'flex items-center gap-2'}>

                    <a target={'_blank'} href={'https://x.com/4ssulei'}>
                        <img src={'../public/twitter.png'} className={'rounded-lg w-10 h-auto'}/>
                    </a>
                    <a target={'_blank'} href={''}>
                        <img src={'https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg'} className={'rounded-lg w-10 h-auto'}/>
                    </a>
                    <a target={'_blank'} href={'https://github.com/arobaseSuulei'}>
                        <img src={'../public/github.png'} className={'rounded-lg w-10 h-auto'}/>
                    </a>




                </span>


            </div>
        </div>
    );
}