import {useEffect, useState} from "react";



export default function ProjectTodo() {

    return (



            <div className={'border border-gray-500 rounded-lg grid grid-cols-1 grid-rows-2  '}>
                {/*image*/}
                <a target={'_blank'} href={'https://donelist-todo.vercel.app'}>
                    <img
                        className=" rounded-lg shadow-lg w-full h-full "
                        src="https://pxyqknxfvimxdcmplbff.supabase.co/storage/v1/object/public/items/SCR-20241118-blbm.jpeg"

                        />
                </a>


                {/*info*/}

                <nav className={'flex flex-col gap-2 py-2 px-2'}>
                    <h1 className={'font-semibold '}>Donelist</h1>
                    <p className={' text-xs'}>Septembre 2024</p>
                    <p className={'opacity-60 text-xs'}>Projet d'application web de gestion de tâches, to do list</p>

                    <p className={'flex flex-wrap gap-2'}>
                        <a className={'cursor-pointer hover:opacity-60  rounded-lg p-1 text-xs bg-zinc-700 text-white'}>React
                            js</a>
                        <a className={'cursor-pointer hover:opacity-60 rounded-lg p-1 text-xs bg-zinc-700 text-white'}>Tailwind
                            css</a>


                    </p>

                    <p>
                        <a target={'_blank'} href={'https://github.com/arobaseSuulei/todoapp/'} className={'cursor-pointer hover:opacity-60 rounded-lg p-1 text-xs bg-white text-black'}>code
                            source</a>
                        <a href={'https://donelist-todo.vercel.app'}
                           className={'ml-4 cursor-pointer hover:opacity-60 rounded-lg p-1 text-xs bg-white text-black'}>visitez</a>

                    </p>

                </nav>
            </div>



    );
}