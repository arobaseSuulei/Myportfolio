import React from "react";
import Header from "./Header.jsx";
import {Text} from "@radix-ui/themes";



export default function Navbar() {
    return (
        <div className={'  px-4 py-4 fixed top-0 left-0  w-full z-50 flex justify-between items-center '}>


            <div className="border backdrop-blur-md font-times flex flex-col w-16 h-16 px-2">
                <p className="text-xs flex justify-end">Ai</p>
                <p className="flex justify-center text-2xl items-center">Su</p>
                


            </div>


            <div className={' fixed sm:static bottom-0 sm:top-0 right-0 mx-4 my-4  rounded-full backdrop-blur-md'}>
                <div
                    className={'flex items-center rounded-full py-3 px-8 gap-2 border-[0.2px] border-gray-500 '}>
                    <a className={"rounded-lg p-2 text-sm   transition ease-in-out duration-500 "}
                       href={"#work"}>Work
                    </a>

                    <a className={"rounded-lg p-2 text-sm   transition ease-in-out duration-500 "}
                       href={"#work"}>Blog
                    </a>

                    
                    <a className={"rounded-lg p-2 text-sm   transition ease-in-out duration-500 "}
                       href={"mailto:slimanediallo2105@gmail.com"}>Contact
                    </a>


                </div>
            </div>


            <div
                className={"backdrop-blur-md flex gap-1 items-center py-4 px-5 border-[0.2px] border-gray-500 text-sm font-semibold p-2 rounded-full"}>


                <a>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z"/>
                        </svg>
                    </a>
                    <a href={"https://github.com/arobaseSuulei/"}>GitHub</a>
            </div>

        </div>
    );
}