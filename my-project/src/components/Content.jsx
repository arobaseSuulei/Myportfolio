import React from 'react';



export default function Content(){
    return(
        <div className={' sm:mx-32'}>
            <div className={'flex flex-col items-center justify-center gap-14 mt-16'} >
                <a href={''} className={'flex items-center font-semibold rounded-full p-4 bg-white text-black shadow-[0_0_15px_rgba(255,255,255)]'}>
                    <p >Hello, I am souleymane👋</p>

                </a>


                <nav className={'flex flex-col items-center justify-center  gap-6'} >
                    <p className={' font-semibold sm:text-3xl text-2xl text-center sm:px-80 md:px-12 px-2 '}>
                        Creative computer science student
                    </p>

                    <a className={' flex items-center justify-center bg-white text-black gap-2 border rounded-full p-2'}>


                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="size-3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                        </svg>


                        <p className={'text-xs '}> Skills on practice</p>


                    </a>

                </nav>


            </div>
        </div>
    );
}