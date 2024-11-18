import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home.jsx';
import Allprojects from "./Allprojects.jsx";

export default function App() {
    useEffect(() => {
        document.title = "Souleymane - Portfolio";
    }, []);

    return (
        <div  className={'text-white'}>

            <Router >
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>

            </Router>
        </div>
    );
}