import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home.jsx';
import Allprojects from "./Allprojects.jsx";
import {Theme} from "@radix-ui/themes";

export default function App() {
    useEffect(() => {
        document.title = "Thierno - Portfolio";
    }, []);

    return (

            <div className={'text-white px-4 py-4'}>

                <Router>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                    </Routes>

                </Router>
            </div>

    );
}