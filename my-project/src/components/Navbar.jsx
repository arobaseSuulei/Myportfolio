import React from "react";
import Header from "./Header.jsx";
import {Text} from "@radix-ui/themes";



export default function Navbar() {
    return (
        <div className={'  px-4 py-4 fixed top-0 left-0  w-full z-50 flex justify-between items-center '}>


            <div className=" flex text-4xl flex-col w-16 h-16 px-2">





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
                className={" flex gap-1 items-center py-4 px-6  text-sm font-semibold p-2 rounded-full"}>




                    <a href={"https://github.com/arobaseSuulei/"}>
                        <img className={'w-12 rounded-full'} src={'https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png'}/>
                    </a>
            </div>

        </div>
    );
}