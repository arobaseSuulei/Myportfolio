import {useEffect, useState} from "react";
import ProjectTodo from "./ProjectTodo.jsx";
import ProjectPortfolio from "./ProjectPortfolio.jsx";
import ScrollRevealItem from "./ScrollRevealItem.jsx";
import ProjectFood from "./ProjectFood.jsx";
import screenPortfolio from "../assets/Souleymane - Portfolio.jpeg"
import screenFood from "../assets/foodQ.jpeg"
import screenChatgo from "../assets/Clip2.mp4"
import kaggle from "../assets/kaggle.png"



export default function Projects() {


    const project=[
        {
            id:1,
            name:"chatGO - messaging / analyzer chat",
            url:"https://chatgo-realtime.vercel.app/",
            image:false,
            imageUrl:screenChatgo,
            description:"ChatGO is a real-time messaging app built with React, tailwind, python working with ML model and Supabase/supabase-realtime.\n" +
                "                            It allows users to send and receive messages seamlessly, analyzing the messages before sending with ML tools transformers \n" +
                "                            I also used railway for the deployement of the script python"

        },
        {
            id:2,
            name:"Food Quality",
            url:"https://food-quality.vercel.app",
            image: true,
            imageUrl:screenFood,
            description:"Food Quality is a sleek and interactive app built with React, " +
                "Tailwind CSS, SQL, and Framer Motion. It provides real-time ratings and insights on the " +
                "quality of fast food menus." +
                " Food Quality ensures an intuitive and dynamic way to evaluate and compare meals."

        },
        {
            id:3,
            name:"Predict Student Performance with linear regression",
            url:"https://github.com/arobaseSuulei/gradePrediction",
            image: true,
            imageUrl:kaggle,
            description:" This project aims to predict a student's final grade based on key factors such as:\n" +
                "\n" +
                "Daily study hours 📖\n" +
                "Sleep hours 😴\n" +
                "Socioeconomic score 💰\n" +
                "Class attendance (%) 🎓 " +
                "Tech Stack: Python, Pandas, NumPy, Scikit-Learn " +
                " This project highlights the importance of data-driven insights in education and demonstrates how predictive models can assist in academic analysis."

        },
        {
            id:4,
            name:"Portfolio",
            image:true,
            imageUrl:screenPortfolio,
            url:"https://souleyd-portfolio.vercel.app",
            description:"My portfolio is a modern and responsive web showcase built with " +
                "React and Tailwind CSS. It highlights my projects," +
                " skills, and experience, offering an interactive and visually appealing experience."

        }

    ];




    return(
        <div className={'flex flex-col sm:p-4 gap-8'}>

            <h1 className={'font-semibold flex items-center justify-center text-sm'}>
                <p className={'font-semibold text-xl sm:text-2xl text-white p-2 rounded-lg'}>Highlighted
                    work</p>
            </h1>

            {project.map((item, index) => (
                <div>


                    <ScrollRevealItem>
                        <div className={'grid grid-cols-1  gap-2'}>


                            <div className={'border  rounded-lg max-w-full min-w-0  p-4 '}>

                                {/*info*/}

                                <nav className={'flex flex-col py-12 px-2'}>

                                    <p className={'flex flex-col sm:py-6 sm:px-2 px-2 py-2 gap-2'}>
                                        <a className={'flex items-center gap-1 sm:text-2xl font-semibold'}>


                                            <p className={'flex w-full justify-between items-center'}>


                                                <h1 className={'flex flex-col gap-1 sm:gap-2'}>
                                                    <a className={'font-semibold text-lg sm:text-2xl'}>{item.name}</a>


                                                </h1>
                                                <a target={'_blank'} href={item.url}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                         viewBox="0 0 24 24"
                                                         stroke-width="1.5" stroke="currentColor"
                                                         className="sm:size-12 size-8 rounded-full p-2">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"/>
                                                    </svg>
                                                </a>
                                            </p>
                                        </a>


                                    </p>


                                    <p>
                                        {item.description}

                                    </p>


                                </nav>
                                {/*Video*/}
                                <a target={'_blank'} href={item.url}>


                                    {item.image ?
                                        <img className={"rounded-lg"} src={item.imageUrl}/>
                                        : <video
                                            className={" object-cover aspect-video rounded-lg shadow-lg w-full"}
                                            autoPlay
                                            muted
                                            loop
                                            src={item.imageUrl}>
                                            Votre navigateur ne supporte pas la balise vidéo.
                                        </video>
                                    }

                                </a>


                            </div>


                        </div>
                    </ScrollRevealItem>
                </div>
            ))}


        </div>
    );
}