import React from 'react';
import { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";

const Layout = () => {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(prev => !prev);
    };

    return (
        <>
            <nav className="w-full fixed flex justify-between items-center px-4 py-3 bg-black text-white">

                <div className="flex gap-4 w-1/3 text-base">

                    <a href="/#projects">Projects</a>

                    <a href="/#about">About</a>

                    <Link to="/#contact">Contact</Link>

                </div>

                <Link to="/" className="w-1/3 text-2xl text-center">Mariam Kvirtia</Link>

                <div className="flex gap-4 justify-end w-1/3">

                    <a href="https://www.instagram.com/mariamkvirtia/">
                        <FaInstagram className="text-[32px] grayscale opacity-70 me-[2px]" />
                    </a>

                    <a href="https://www.eyeem.com/u/31846779?fbclid=IwAR0ELXp_cAHZfIYbhGP8evUClvaG57hCIQSEMqBd55IfkdKmhO2qokCwglQ">
                        <img src="/images/assets/2.png" className="grayscale w-8 h-8 p-[2px] opacity-55 rounded-lg" />
                    </a>

                    <a href="https://www.gofundme.com/f/studiumdie-ein-traum-geworden-ist?utm_campaign=p_cp+fundraiser-sidebar&utm_medium=copy_link_all&utm_source=customer">
                        <img src="/images/assets/1.png" className="grayscale w-8 h-8 p-[2px] rounded-lg" />
                    </a>

                </div>


            </nav >

            <Outlet />
        </>
    )
};

export default Layout;