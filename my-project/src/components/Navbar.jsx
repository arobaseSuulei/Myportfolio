import React from "react";



export default function Navbar() {
    return(
        <div>
            <div className={'w-full flex flex-wrap justify-between items-center py-16 sm:px-14 px-2'}>
                <nav className={'flex items-center text-xs gap-1 '}>
                    <a href={'mailto:slimanediallo2105@gmail.com'} className={'flex items-center bg-white text-black gap-2 border rounded-full p-4'}>
                        <p className={'sm:block hidden '}> Send an email</p>
                        <p className={'sm:hidden block'}>email</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                             className="size-4">
                            <path fill-rule="evenodd"
                                  d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
                                  clip-rule="evenodd"/>
                        </svg>

                    </a>
                    <a target={'_blank'} href={'https://drive.google.com/file/d/1OlZScmxTYkx_3Tw9UhpgVN4of5UwZGzI/view?usp=sharing'} className={'flex items-center gap-2 border rounded-full p-4 px-6'}>
                        <p> CV </p>


                    </a>
                </nav>
                <nav className={'flex items-center text-xs gap-2 '}>


                    <a href={'https://www.linkedin.com/in/souleymane-diallo-2b13a02b9/'} className={'hidden sm:block pr-4 border-r '}>LinkedIn</a>
                    <a href={'https://www.linkedin.com/in/souleymane-diallo-2b13a02b9/'} className={'sm:hidden p-2'}>
                        <img className={'w-8'}
                             src={'https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg'}/>
                    </a>

                    <a href={'https://github.com/arobaseSuulei'} className={'hidden sm:block pr-8 '}>Github</a>
                    <a href={'https://github.com/arobaseSuulei'} className={'sm:hidden p-2'}>
                        <img className={'w-8 rounded-lg'}
                             src={'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png'}/>
                    </a>


                </nav>
            </div>
        </div>
    );
}