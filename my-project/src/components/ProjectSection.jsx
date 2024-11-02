import React, {useEffect,useState} from 'react';




export default function ProjectSection(){


    const [projects, setProjects] = useState([
        {id:1,name:'Donelist',description:'To do app',technologies:'ReactJS - Tailwind css',link:'https://donelist-todo.vercel.app'},
        {id:1,name:'ChatGo',description:'Appli de chatting',technologies:'ReactJS - Tailwind css - supabase',link:'https://chatgo-realtime.vercel.app'},
        {id:2,name:'Portfolio',description:'portfolio',technologies:'ReactJS - Tailwind css',link:'https://souleyd-portfolio.vercel.app'}

    ]);
    return(
        <div className={''}>

            <a className="flex items-center justify-center w-32 mx-auto text-center bg-white text-black gap-2 border rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="size-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25L12 15.75 4.5 8.25"/>
                </svg>
                <p className="text-xs">My projects</p>
            </a>


            <div className={'sm:grid grid-cols-3 mt-12 p-4 '}>


                <div className="flex flex-col sm:px-72  sm:col-span-3">
                    {projects.map((project) => (

                        <div key={project.id} className="p-4 flex justify-between  shadow">
                            <span className={'flex flex-col'}>
                                <a target={'_blank'} href={project.link}
                                   className={'text-blue-500 underline '}>{project.name}</a>
                                <a className={'text-xs'}>{project.technologies}</a>
                            </span>


                            <p className={'text-xs'}>{project.description}</p>


                        </div>
                    ))}
                </div>

            </div>

        </div>
    );
}