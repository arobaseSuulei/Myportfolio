import React from 'react';
import '../App.css'
export default function Scrollbar() {
    return (
        <div  className='overflow-x-hidden rounded-full  mx-4 sm:mx-14 md:mx-20 lg:mx-80  mt-6'>
            <div className="flex items-center  gap-14 animate-scroll py-14 w-full ">


                <p>
                    <img
                        src={'https://tailwindcss.com/_next/static/media/tailwindcss-logotype-white.944c5d0ef628083bb316f9b3d643385c86bcdb3d.svg'}
                        className={'w-64'}/>
                </p>
                <p>
                    <img src={'https://www.svgrepo.com/show/303210/figma-1-logo.svg'} className={'w-16'}/>
                </p>
                <p>
                    <img src={'https://nextjs.org/icons/react.svg'} className={'w-20'}/>
                </p>
                <p>
                    <img src={'https://seeklogo.com/images/G/git-logo-A1D01DDA30-seeklogo.com.png'} className={'w-24'}/>
                </p>


            </div>
        </div>
    );
}
