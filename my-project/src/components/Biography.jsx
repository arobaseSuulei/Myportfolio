import React from 'react';
import {useEffect, useState} from 'react'




export default function Biography() {
    return(
        <div>
            <div className={'mt-12 flex flex-col gap-6 items-center'}>
                <h1 className={'font-bold'}> Coding the future: One project at a time. </h1>
                <p className={'text-left '}> As a passionate IT student, I'm exploring the vast world of
                    technology and turning ideas
                    into reality through code. My computer science studies have taught me how
                    to build and grow both personally and professionally. Now in my 3rd year of engineering,
                    I've sharpened my skills through numerous projects. I'm currently seeking an internship
                    to gain hands-on experience and further develop my abilities.
                    Check out my portfolio to see more about me and my work.
                </p>
            </div>
        </div>
    );
}