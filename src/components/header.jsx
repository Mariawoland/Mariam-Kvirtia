import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";


const Header = () => {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(prev => !prev);
    };

    const [visible, setVisible] = useState(true);

    useEffect(() => {
        let prevScrollPos = window.scrollY;

        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const isScrolledUp = currentScrollPos < prevScrollPos;

            setVisible(isScrolledUp || currentScrollPos < 100);
            prevScrollPos = currentScrollPos;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (

        <>

            <header className={`z-50 fixed inset-0 w-full flex justify-between items-center transition-all duration-300 md:px-10 px-5 h-[70px] bg-white ${!visible ? 'translate-y-[-100%]' : 'translate-y-0'}`}>

                <div className="md:flex hidden lg:gap-7 gap-4 w-1/3 text-base font-semibold items-center transition-all duration-300 sm:flex-row flex-col lg:items-center lg:p-0 p-2 tracking-wide ms-auto lg:text-[15px] md:text-[14px]">

                    <a href="/#projects">Projects</a>

                    <a href="/#about">About</a>

                    <a href="/#contact">Contact</a>

                </div>

                <a href="/" className="md:w-1/3 text-2xl text-center font-semibold">Mariam Kvirtia</a>

                <div className="md:flex hidden gap-4 justify-end w-1/3">

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

                <button className='md:hidden flex text-[25px] font-bold' onClick={handleClick}>
                    <CiMenuBurger />
                </button>

            </header>

            <div className={`z-[100] bg-five text-one fixed top-0 right-0 font-semibold flex flex-col gap-6 p-5 transition-all duration-300 h-screen text-base bg-white ${clicked === true ? 'translate-x-0' : 'translate-x-[100%]'}`}>

                <div className='flex gap-10 items-center'>

                    <a href="/" className="text-xl">Mariam Kvirtia</a>

                    <button className='md:hidden flex text-[40px]' onClick={handleClick}>
                        <IoIosClose />
                    </button>

                </div>

                <div className="flex lg:gap-7 gap-4 w-full text-base font-semibold sm:flex items-start transition-all duration-300 flex-col lg:p-0 p-2 tracking-wide ms-auto lg:text-[15px] md:text-[14px]">

                    <a href="/#projects">Projects</a>

                    <a href="/#about">About</a>

                    <a href="/#contact">Contact</a>

                </div>

                <div className="flex gap-4 justify-start w-full">

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

            </div>

        </>
    )
}

export default Header;