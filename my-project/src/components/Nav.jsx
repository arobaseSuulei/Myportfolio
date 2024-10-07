import React from 'react';
import {useEffect,useState} from "react";
import {Link} from "react-router-dom";



export default function Nav() {
    return(
        <div className={' '}>
            <div className={' flex gap-2 justify-center items-center  rounded-lg'}>
                <Link to="/">Home</Link>
                <Link to={'/Projects'}>Projects</Link>


            </div>
            <hr/>
        </div>
    );
}