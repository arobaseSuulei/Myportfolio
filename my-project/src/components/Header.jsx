import React from 'react';
import {useState, useEffect} from 'react'

import '../App.css'



export default function Header() {
    return(
        <div className={' '}>
            <div className={'flex flex-col flex-wrap gap-6 py-2 p-4'}>
                <nav className={'grid grid-cols-2 gap-2'}>

                        <h1 className={'font-semibold p-6 text-3xl sm:text-5xl'}>Hey, je suis souleymane</h1>



                </nav>
                <p className={' '}>Etudiant en informatique passionné par la programmation et les
                    algorithmes</p>

                <nav className={'flex gap-4'}>

                    <a href={'mailto:slimanediallo2105@gmail.com'}
                       className={'shadow-[0_0_15px_rgba(255,255,255)] flex items-center w-36 text-xs bg-white text-black gap-1 border rounded-full p-4'}>
                        <p className={'sm:block hidden '}> Send an email</p>
                        <p className={'sm:hidden block'}>email</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                             className="size-4">
                            <path fill-rule="evenodd"
                                  d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
                                  clip-rule="evenodd"/>
                        </svg>

                    </a>

                    {/* Mon cv*/}

                    <a target={'_blank'}
                       href={'https://drive.google.com/file/d/1XXiPlo3oJVYvFl2tBXph-1jPobbw4wR7/view?usp=sharing'}
                       className={'flex items-center gap-2 border rounded-full w-24 text-xs hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(255,255,255)] transition ease-out p-4 px-6'}>
                        <p> CV </p>


                    </a>




                </nav>




                <nav className={'flex flex-col gap-6 mt-4'}>
                    <h1 className={'font-semibold text-xl'}>A propos</h1>
                    <p className={'opacity-60 text-sm '}>Etudiant en 3e année en cycle ingénieur informatique, je
                        suis un passionné de la programmation
                        dès mon plus jeune âge. Je suis en particulier attiré par le developpement d'applications web et
                        l' intelligence artificielle, mais aussi ouvert à
                        tous les secteurs du developpement informatique en général
                    </p>
                </nav>









            </div>
        </div>
    );
}