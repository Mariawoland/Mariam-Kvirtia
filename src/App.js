import React from "react";
import { Routes, Route } from 'react-router-dom';
import "./index.css";

import Header from './components/header';
import Projects from "./components/projects";
import Footer from "./components/footer";

function App() {

    return (
        <div className='min-h-screen'>
            <div className={`background-1 transition-all duration-500`}></div>
            <Header />

            <Routes>
                <Route index element={<Projects />} />
                <Route path="*" element={<Projects />} />

            </Routes>
        </div>

    );
}

export default App;