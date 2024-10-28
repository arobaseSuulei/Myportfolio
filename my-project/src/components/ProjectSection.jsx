import React, {useEffect,useState} from 'react';




export default function ProjectSection(){

    return(
        <div>
            <h1 className={'flex justify-center font-semibold my-24'}>my projects</h1>
            <div className={'grid grid-cols-3  gap-1'}>

                <div className={''}>1</div>
                <div>2</div>
                <div>3</div>

            </div>
        </div>
    );
}