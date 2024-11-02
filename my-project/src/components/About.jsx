import React from "react";



export default function About() {
    return (


        <div className={''}>

            <a className="flex items-center justify-center w-32 mx-auto text-center bg-white text-black gap-2 border rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" className="size-3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25L12 15.75 4.5 8.25"/>
                </svg>
                <p className="text-xs">About me</p>
            </a>


        <div className={'sm:grid grid-cols-3 mt-12 p-4 '}>


            <div className="flex flex-col sm:px-72  sm:col-span-3">
                <p>I am currently a Software Development Engineer at Amazon, working in the AWS sector under team Route 53.
                    At the same time, I am undertaking a part-time Master's of Science in Software Engineering at University of Oxford.</p>
            </div>

        </div>

    </div>
)
    ;
}