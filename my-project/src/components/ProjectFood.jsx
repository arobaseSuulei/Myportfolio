import {useEffect, useState} from "react";



export default function ProjectFood() {

    return (



        <div className={'border  rounded-lg grid grid-cols-1 grid-rows-2  '}>
            {/*image*/}
            <a target={'_blank'} href={'https://donelist-todo.vercel.app'}>
                <img
                    className=" rounded-lg shadow-lg w-full h-full "
                    src="https://pxyqknxfvimxdcmplbff.supabase.co/storage/v1/object/public/items/SCR-20241118-blbm.jpeg"

                />
            </a>


            {/*info*/}

            <nav className={'flex flex-col gap-2 py-2 px-2'}>
                <h1 className={'font-semibold '}>Food Quality</h1>
                <p className={' text-xs'}>Janvier 2025</p>
                <p className={'opacity-60 text-xs'}>Petite application web qui affiche la qualité des menus fast food</p>

                <p className={'flex flex-wrap gap-2'}>
                    <a className={'cursor-pointer hover:opacity-60  rounded-lg p-1 text-xs bg-zinc-700 text-white'}>React
                        js</a>
                    <a className={'cursor-pointer hover:opacity-60 rounded-lg p-1 text-xs bg-zinc-700 text-white'}>Tailwind
                        css</a>
                    <a className={'cursor-pointer hover:opacity-60 rounded-lg p-1 text-xs bg-zinc-700 text-white'}>Sql</a>
                    <a className={'cursor-pointer hover:opacity-60 rounded-lg p-1 text-xs bg-zinc-700 text-white'}>Framer Motion</a>


                </p>

                <p>
                    <a target={'_blank'} href={'https://github.com/arobaseSuulei/FoodQuality/'}
                       className={'cursor-pointer hover:opacity-60 rounded-lg p-1 text-xs bg-white text-black'}>code
                        source</a>
                    <a  target={'_blank'} href={'https://github.com/arobaseSuulei/FoodQuality/'}
                       className={'ml-4 cursor-pointer hover:opacity-60 rounded-lg p-1 text-xs bg-white text-black'}>visitez</a>

                </p>

            </nav>
        </div>



    );
}